package com.georgimarinov.classifiedAds.controller;

import com.georgimarinov.classifiedAds.model.ClassifiedAd;
import com.georgimarinov.classifiedAds.service.ClassifiedAdsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/classifiedAds")
@CrossOrigin
public class ClassifiedAdsController {
    @Autowired
    private ClassifiedAdsService classifiedAdsService;

    @PostMapping("/add")
    public String add(@RequestBody ClassifiedAd classifiedAd){
        classifiedAdsService.saveClassifiedAd(classifiedAd);
        return  "Кратката обява е добавена успешно...";
    }

    @GetMapping("/getAll")
    public List<ClassifiedAd> getAllClassifiedAds(){
        return classifiedAdsService.getAllClassifiedAds();
    }
}
