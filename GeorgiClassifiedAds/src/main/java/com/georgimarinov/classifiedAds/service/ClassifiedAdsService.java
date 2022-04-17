package com.georgimarinov.classifiedAds.service;

import com.georgimarinov.classifiedAds.model.ClassifiedAd;

import java.util.List;

public interface ClassifiedAdsService {
    public ClassifiedAd saveClassifiedAd(ClassifiedAd classifiedAd);
    public List<ClassifiedAd> getAllClassifiedAds();
}
