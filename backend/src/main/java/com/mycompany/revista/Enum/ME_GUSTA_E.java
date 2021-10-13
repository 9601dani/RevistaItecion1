/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Enum.java to edit this template
 */
package com.mycompany.revista.Enum;

/**
 *
 * @author daniel
 */
public enum ME_GUSTA_E {
    ACEPTA_LIKE, NO_ACEPTA_LIKE;

    public static String getLike(ME_GUSTA_E type) {
        if (type.equals(ME_GUSTA_E.ACEPTA_LIKE)) {
            return "ACEPTA_LIKE";
        } else if (type.equals(ME_GUSTA_E.NO_ACEPTA_LIKE)) {
            return "NO_ACEPTA_LIKE";
        }
        return null;
    }

    public static ME_GUSTA_E getLike(String type) {
        if (type.equals("ACEPTA_LIKE")) {
            return ACEPTA_LIKE;
        } else if (type.equals("NO_ACEPTA_LIKE")) {
            return NO_ACEPTA_LIKE;
        }
        return null;
    }

}
