/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.mycompany.revista.clases;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.time.Period;
import java.util.ArrayList;


/**
 *
 * @author daniel
 */
public class OtherMagazineBeans {
     private int magazineRecord;
    private BigDecimal dayCost;
    private BigDecimal totalDayCost;
    private BigDecimal gananciaTotal;
    private ArrayList<Recaudacion> subscriptionList;

    {
        this.gananciaTotal = new BigDecimal(0);
    }

    public OtherMagazineBeans(int magazineRecord, BigDecimal dayCost) {
        this.magazineRecord = magazineRecord;
        this.dayCost = dayCost;
    }

    public int getMagazineRecord() {
        return magazineRecord;
    }

    public void setMagazineRecord(int magazineRecord) {
        this.magazineRecord = magazineRecord;
    }

    public BigDecimal getDayCost() {
        return dayCost;
    }

    public void setDayCost(BigDecimal dayCost) {
        this.dayCost = dayCost;
    }

    public BigDecimal getTotalDayCost() {
        return totalDayCost;
    }

    public void setTotalDayCost(BigDecimal totalDayCost) {
        this.totalDayCost = totalDayCost;
    }

    public BigDecimal getGananciaTotal() {
        return gananciaTotal;
    }

    public void setGananciaTotal(LocalDate start, LocalDate end) {

        Period period = Period.between(start, end);
        int days = period.getDays() + (period.getMonths()*30) + (period.getYears()*365);

        for(Recaudacion subscription: subscriptionList){
            gananciaTotal = BigDecimal.valueOf(gananciaTotal.doubleValue() + subscription.getCosto_con_descuento().doubleValue());
        }

        totalDayCost = BigDecimal.valueOf((dayCost.doubleValue() * days));

        gananciaTotal = BigDecimal.valueOf(gananciaTotal.doubleValue() - totalDayCost.doubleValue());

    }

    public ArrayList<Recaudacion> getSubscriptionList() {
        return subscriptionList;
    }

    public void setSubscriptionList(ArrayList<Recaudacion> subscriptionList) {
        this.subscriptionList = subscriptionList;
    }
    
    
}
