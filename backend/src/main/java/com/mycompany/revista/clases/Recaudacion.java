/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.mycompany.revista.clases;

import java.math.BigDecimal;
import java.util.Date;

/**
 *
 * @author daniel
 */
public class Recaudacion {
    private int registro;
    private String nombre_revista;
    private BigDecimal total_pagar;
    private BigDecimal costo_con_descuento;
    private Date fecha_pago;
    private String nombre_usuario;

    //CONSTRUCTOR PARA VER INFO

    public Recaudacion(int registro, String nombre_revista, BigDecimal total_pagar, BigDecimal costo_con_descuento, Date fecha_pago, String nombre_usuario) {
        this.registro = registro;
        this.nombre_revista = nombre_revista;
        this.total_pagar = total_pagar;
        this.costo_con_descuento = costo_con_descuento;
        this.fecha_pago = fecha_pago;
        this.nombre_usuario = nombre_usuario;
    }
    //CONSTRUCTOR PARA CRUD

    public Recaudacion(String nombre_revista, BigDecimal total_pagar, BigDecimal costo_con_descuento, Date fecha_pago, String nombre_usuario) {
        this.nombre_revista = nombre_revista;
        this.total_pagar = total_pagar;
        this.costo_con_descuento = costo_con_descuento;
        this.fecha_pago = fecha_pago;
        this.nombre_usuario = nombre_usuario;
    }

    public int getRegistro() {
        return registro;
    }

    public void setRegistro(int registro) {
        this.registro = registro;
    }

    public String getNombre_revista() {
        return nombre_revista;
    }

    public void setNombre_revista(String nombre_revista) {
        this.nombre_revista = nombre_revista;
    }

    public BigDecimal getTotal_pagar() {
        return total_pagar;
    }

    public void setTotal_pagar(BigDecimal total_pagar) {
        this.total_pagar = total_pagar;
    }

    public BigDecimal getCosto_con_descuento() {
        return costo_con_descuento;
    }

    public void setCosto_con_descuento(BigDecimal costo_con_descuento) {
        this.costo_con_descuento = costo_con_descuento;
    }

    public Date getFecha_pago() {
        return fecha_pago;
    }

    public void setFecha_pago(Date fecha_pago) {
        this.fecha_pago = fecha_pago;
    }

    public String getNombre_usuario() {
        return nombre_usuario;
    }

    public void setNombre_usuario(String nombre_usuario) {
        this.nombre_usuario = nombre_usuario;
    }
    
    

    
    
    
}
