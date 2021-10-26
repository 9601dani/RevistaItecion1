/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.mycompany.revista.clases;

import java.math.BigDecimal;
import java.util.ArrayList;

/**
 *
 * @author daniel
 */
public class GananciaBean {
      private double total;
    private ArrayList<OtherMagazineBeans> otherMagazineBeans;

    {

        total = 0;
    }

    public GananciaBean( ArrayList<OtherMagazineBeans> otherMagazineBeans) {
        this.otherMagazineBeans = otherMagazineBeans;
    }

    public void updateTotal(){
        for(OtherMagazineBeans other: otherMagazineBeans){
            total += total + other.getGananciaTotal().doubleValue();
        }
    }

    public void setTotal(double total) {
        this.total = total;
    }

    public ArrayList<OtherMagazineBeans> getOtherMagazineBeans() {
        return otherMagazineBeans;
    }

    public void setOtherMagazineBeans(ArrayList<OtherMagazineBeans> otherMagazineBeans) {
        this.otherMagazineBeans = otherMagazineBeans;
    }

    public double getTotal() {
        return total;
    }
    
    
}
