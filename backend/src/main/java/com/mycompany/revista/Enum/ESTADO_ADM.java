/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Enum.java to edit this template
 */
package com.mycompany.revista.Enum;

/**
 *
 * @author daniel
 */
public enum ESTADO_ADM {
    ACTIVO,DESACTIVO;
    
    public static String getAdmin(ESTADO_ADM type) {
        if (type.equals(ESTADO_ADM.ACTIVO)) {
            return "ACTIVO";
        } else if (type.equals(ESTADO_ADM.DESACTIVO)) {
            return "DESACTIVO";
        }
        return null;
    }
    
    public static ESTADO_ADM getAdmin(String type) {
        if (type.equals("ACTIVO")) {
            return ACTIVO;
        } else if (type.equals("DESACTIVO")) {
            return DESACTIVO;
        }
        return null;
    }
}
