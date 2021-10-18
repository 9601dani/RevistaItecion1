/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Enum.java to edit this template
 */
package com.mycompany.revista.Enum;

/**
 *
 * @author daniel
 */
public enum ESTADO_SUS {
    ACTIVA,DESACTIVA,SUSPENDIDA;
    
    
    public static String getMySus(ESTADO_SUS type) {
        if (type.equals(ESTADO_SUS.ACTIVA)) {
            return "ACTIVA";
        } else if (type.equals(ESTADO_SUS.DESACTIVA)) {
            return "DESACTIVA";
        }else if(type.equals(ESTADO_SUS.SUSPENDIDA)){
            return "SUSPENDIDA";
        }
        return null;
    }

    public static ESTADO_SUS getMySus(String type) {
        if (type.equals("ACTIVA")) {
            return ACTIVA;
        } else if (type.equals("DESACTIVA")) {
            return DESACTIVA;
        } else if(type.equals("SUSPENDIDA")){
            return SUSPENDIDA;
        }
        return null;
    }
}
