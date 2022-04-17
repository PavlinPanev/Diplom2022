package com.georgimarinov.classifiedAds.repository;

import com.georgimarinov.classifiedAds.model.ClassifiedAd;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ClassifiedAdsRepository extends JpaRepository<ClassifiedAd,Integer> {
}
