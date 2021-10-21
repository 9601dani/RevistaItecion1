/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Enum.java to edit this template
 */
package com.mycompany.revista.Enum;

/**
 *
 * @author daniel
 */
public enum ESTADO_ANUN {
    ACEPTADO,EN_ESPERA,MOROSO,CADUCADO;
    
     public static String getAnun(ESTADO_ANUN type) {
        if (type.equals(ESTADO_ANUN.ACEPTADO)) {
            return "ACEPTADO";
        } else if (type.equals(ESTADO_ANUN.EN_ESPERA)) {
            return "EN_ESPERA";
        }else if(type.equals(ESTADO_ANUN.CADUCADO)){
            return "CADUCADO";
        }else if(type.equals(ESTADO_ANUN.MOROSO)){
            return "MOROSO";
        }
        return null;
    }
    
    public static ESTADO_ANUN getAnun(String type) {
        if (type.equals("ACEPTADO")) {
            return ACEPTADO;
        } else if (type.equals("EN_ESPERA")) {
            return EN_ESPERA;
        }else if(type.equals("MOROSO")){
            return MOROSO;
        }else if(type.equals("CADUCADO")){
            return CADUCADO;
        }
        return null;
    }
}
