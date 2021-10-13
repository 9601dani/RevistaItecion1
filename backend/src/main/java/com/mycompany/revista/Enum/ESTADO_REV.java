/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Enum.java to edit this template
 */
package com.mycompany.revista.Enum;

/**
 *
 * @author daniel
 */
public enum ESTADO_REV {
    ACEPTADA,DENEGADA,EN_ESPERA;
    
     public static String getRev(ESTADO_REV type) {
        if (type.equals(ESTADO_REV.ACEPTADA)) {
            return "ACEPTADA";
        } else if (type.equals(ESTADO_REV.DENEGADA)) {
            return "DENEGADA";
        }else if(type.equals(ESTADO_REV.EN_ESPERA)){
            return "EN_ESPERA";
        }
        return null;
    }
    
    public static ESTADO_REV getRev(String type) {
        if (type.equals("ACEPTADA")) {
            return ACEPTADA;
        } else if (type.equals("DENEGADA")) {
            return DENEGADA;
        }else if(type.equals("EN_ESPERA")){
            return EN_ESPERA;
        }
        return null;
    }
}
