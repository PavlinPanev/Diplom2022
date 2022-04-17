package com.georgimarinov.classifiedAds.service;

import com.georgimarinov.classifiedAds.model.ClassifiedAd;
import com.georgimarinov.classifiedAds.repository.ClassifiedAdsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ClassifiedAdsImpl implements ClassifiedAdsService {

    @Autowired
    private ClassifiedAdsRepository classifiedAdsRepository;

    @Override
    public ClassifiedAd saveClassifiedAd(ClassifiedAd classifiedAd) {
        return classifiedAdsRepository.save(classifiedAd);
    }

    @Override
    public List<ClassifiedAd> getAllClassifiedAds() {
        return classifiedAdsRepository.findAll();
    }
}
