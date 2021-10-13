/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Enum.java to edit this template
 */
package com.mycompany.revista.Enum;

/**
 *
 * @author daniel
 */
public enum SUSCRIP_E {
    ACEPTA_SUSCRIPCION, NO_ACEPTA_SUSCRIPCION;

    public static String getSus(SUSCRIP_E type) {
        if (type.equals(SUSCRIP_E.ACEPTA_SUSCRIPCION)) {
            return "ACEPTA_SUSCIPCION";
        } else if (type.equals(SUSCRIP_E.NO_ACEPTA_SUSCRIPCION)) {
            return "NO_ACEPTA_SUSCRIPCION";
        }
        return null;
    }

    public static SUSCRIP_E getSus(String type) {
        if (type.equals("ACEPTA_SUSCRIPCION")) {
            return ACEPTA_SUSCRIPCION;
        } else if (type.equals("NO_ACEPTA_SUSCRIPCION")) {
            return NO_ACEPTA_SUSCRIPCION;
        }
        return null;
    }
}
