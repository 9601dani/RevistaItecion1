/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Enum.java to edit this template
 */
package com.mycompany.revista.Enum;

/**
 *
 * @author daniel
 */
public enum ME_GUSTA_SUSCRIPCION {
    DIO_LIKE,NO_DIO_LIKE;
    
    public static String getMyLike(ME_GUSTA_SUSCRIPCION type) {
        if (type.equals(ME_GUSTA_SUSCRIPCION.DIO_LIKE)) {
            return "DIO_LIKE";
        } else if (type.equals(ME_GUSTA_SUSCRIPCION.NO_DIO_LIKE)) {
            return "NO_DIO_LIKE";
        }
        return null;
    }

    public static ME_GUSTA_SUSCRIPCION getMyLike(String type) {
        if (type.equals("DIO_LIKE")) {
            return DIO_LIKE;
        } else if (type.equals("NO_DIO_LIKE")) {
            return NO_DIO_LIKE;
        }
        return null;
    }
    
}
