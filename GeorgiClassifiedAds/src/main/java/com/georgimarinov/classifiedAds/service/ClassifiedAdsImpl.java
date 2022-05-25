package com.georgimarinov.classifiedAds.service;

import com.georgimarinov.classifiedAds.model.ClassifiedAd;
import com.georgimarinov.classifiedAds.repository.ClassifiedAdsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.*;

@Service
public class ClassifiedAdsImpl implements ClassifiedAdsService {

    @Autowired
    private ClassifiedAdsRepository classifiedAdsRepository;

    @Override
    public ClassifiedAd saveClassifiedAd(ClassifiedAd classifiedAd) {
        java.util.Date date = new java.util.Date();
        classifiedAd.setEntryDate(date);
        Calendar cal = Calendar.getInstance();
        cal.setTime(date);
        cal.add(Calendar.DATE, 14);
        classifiedAd.setExpiryDate(cal.getTime());
        return classifiedAdsRepository.save(classifiedAd);
    }

    @Override
    public List<ClassifiedAd> getAllClassifiedAds() {
        return classifiedAdsRepository.findAll();
    }
}
