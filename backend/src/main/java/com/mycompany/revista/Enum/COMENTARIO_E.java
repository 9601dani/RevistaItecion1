/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Enum.java to edit this template
 */
package com.mycompany.revista.Enum;

/**
 *
 * @author daniel
 */
public enum COMENTARIO_E {
    ACEPTA_COMENTARIO, NO_ACEPTA_COMENTARIO;

    public static String getCom(COMENTARIO_E type) {
        if (type.equals(COMENTARIO_E.ACEPTA_COMENTARIO)) {
            return "ACEPTA_COMENTARIO";
        } else if (type.equals(COMENTARIO_E.NO_ACEPTA_COMENTARIO)) {
            return "NO_ACEPTA_COMENTARIO";
        }
        return null;
    }

    public static COMENTARIO_E getCom(String type) {
        if (type.equals("ACEPTA_COMENTARIO")) {
            return ACEPTA_COMENTARIO;
        } else if (type.equals("NO_ACEPTA_COMENTARIO")) {
            return NO_ACEPTA_COMENTARIO;
        }
        return null;
    }
}
