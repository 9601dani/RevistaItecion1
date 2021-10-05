/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Enum.java to edit this template
 */
package com.mycompany.revista.Enum;

/**
 *
 * @author daniel
 */
public enum TIP_USUARIO {
    USUARIO, AUTOR;

    public static String getTypeUser(TIP_USUARIO type) {
        if (type.equals(TIP_USUARIO.USUARIO)) {
            return "USUARIO";
        } else if (type.equals(TIP_USUARIO.AUTOR)) {
            return "AUTOR";
        }
        return null;
    }

}
