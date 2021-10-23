/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.mycompany.revista.clases;

import com.mycompany.revista.Enum.ESTADO_SUS;
import com.mycompany.revista.Enum.ME_GUSTA_SUSCRIPCION;
import java.math.BigDecimal;
import java.util.Date;

/**
 *
 * @author daniel
 */
public class Suscripcion {
    private int id_suscripcion;
    private BigDecimal valor_sus;
    private String fecha_inicial;
    private String fecha_final;
    private ME_GUSTA_SUSCRIPCION me_gusta;
    private ESTADO_SUS estado_suscripcion;
    private String nombre_usuario;
    private int id_revista;
    
    //CONSTRUCTOR COMPLETO

    public Suscripcion(int id_suscripcion, BigDecimal valor_sus, String fecha_inicial, String fecha_final, ME_GUSTA_SUSCRIPCION me_gusta, ESTADO_SUS estado_suscripcion, String nombre_usuario, int id_revista) {
        this.id_suscripcion = id_suscripcion;
        this.valor_sus = valor_sus;
        this.fecha_inicial = fecha_inicial;
        this.fecha_final = fecha_final;
        this.me_gusta = me_gusta;
        this.estado_suscripcion = estado_suscripcion;
        this.nombre_usuario = nombre_usuario;
        this.id_revista = id_revista;
    }
    
    //CONSTRUCTOR PARCIAL

    public Suscripcion(BigDecimal valor_sus, String fecha_inicial, String fecha_final, ME_GUSTA_SUSCRIPCION me_gusta, ESTADO_SUS estado_suscripcion, String nombre_usuario, int id_revista) {
        this.valor_sus = valor_sus;
        this.fecha_inicial = fecha_inicial;
        this.fecha_final = fecha_final;
        this.me_gusta = me_gusta;
        this.estado_suscripcion = estado_suscripcion;
        this.nombre_usuario = nombre_usuario;
        this.id_revista = id_revista;
    }
    
    //USO PARA GUARDAR LA RECAUDACION

    public Suscripcion() {
    }
    

    public int getId_suscripcion() {
        return id_suscripcion;
    }

    public void setId_suscripcion(int id_suscripcion) {
        this.id_suscripcion = id_suscripcion;
    }

    public BigDecimal getValor_sus() {
        return valor_sus;
    }

    public void setValor_sus(BigDecimal valor_sus) {
        this.valor_sus = valor_sus;
    }

    public String getFecha_inicial() {
        return fecha_inicial;
    }

    public void setFecha_inicial(String fecha_inicial) {
        this.fecha_inicial = fecha_inicial;
    }

    public String getFecha_final() {
        return fecha_final;
    }

    public void setFecha_final(String fecha_final) {
        this.fecha_final = fecha_final;
    }

    public ME_GUSTA_SUSCRIPCION getMe_gusta() {
        return me_gusta;
    }

    public void setMe_gusta(ME_GUSTA_SUSCRIPCION me_gusta) {
        this.me_gusta = me_gusta;
    }

    public ESTADO_SUS getEstado_suscripcion() {
        return estado_suscripcion;
    }

    public void setEstado_suscripcion(ESTADO_SUS estado_suscripcion) {
        this.estado_suscripcion = estado_suscripcion;
    }

    public String getNombre_usuario() {
        return nombre_usuario;
    }

    public void setNombre_usuario(String nombre_usuario) {
        this.nombre_usuario = nombre_usuario;
    }

    public int getId_revista() {
        return id_revista;
    }

    public void setId_revista(int id_revista) {
        this.id_revista = id_revista;
    }
    
    
    
}
