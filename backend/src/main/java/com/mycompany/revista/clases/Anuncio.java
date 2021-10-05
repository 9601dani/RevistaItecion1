/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.mycompany.revista.clases;

import com.mycompany.revista.Enum.ESTADO_ANUN;
import java.math.BigDecimal;
import java.sql.Blob;
import java.util.Date;

/**
 *
 * @author daniel
 */
public class Anuncio {
    private int id_anuncio;
    private String des_anuncio;
    private Blob contenido;
    private int apariciones;
    private BigDecimal total_pago;
    private ESTADO_ANUN estado_anuncio;
    private String url;
    private Date fecha_inicio;
    private Date fecha_final;
    private int id_anunciante;
    private String nombre_tipo;

    //CONSTRUCTOR COMPLETO
    public Anuncio(int id_anuncio, String des_anuncio, Blob contenido, int apariciones, BigDecimal total_pago, ESTADO_ANUN estado_anuncio, String url, Date fecha_inicio, Date fecha_final, int id_anunciante, String nombre_tipo) {
        this.id_anuncio = id_anuncio;
        this.des_anuncio = des_anuncio;
        this.contenido = contenido;
        this.apariciones = apariciones;
        this.total_pago = total_pago;
        this.estado_anuncio = estado_anuncio;
        this.url = url;
        this.fecha_inicio = fecha_inicio;
        this.fecha_final = fecha_final;
        this.id_anunciante = id_anunciante;
        this.nombre_tipo = nombre_tipo;
    }
    
    //CONSTRUCTOR SEMI

    public int getId_anuncio() {
        return id_anuncio;
    }

    public void setId_anuncio(int id_anuncio) {
        this.id_anuncio = id_anuncio;
    }

    public String getDes_anuncio() {
        return des_anuncio;
    }

    public void setDes_anuncio(String des_anuncio) {
        this.des_anuncio = des_anuncio;
    }

    public Blob getContenido() {
        return contenido;
    }

    public void setContenido(Blob contenido) {
        this.contenido = contenido;
    }

    public int getApariciones() {
        return apariciones;
    }

    public void setApariciones(int apariciones) {
        this.apariciones = apariciones;
    }

    public BigDecimal getTotal_pago() {
        return total_pago;
    }

    public void setTotal_pago(BigDecimal total_pago) {
        this.total_pago = total_pago;
    }

    public ESTADO_ANUN getEstado_anuncio() {
        return estado_anuncio;
    }

    public void setEstado_anuncio(ESTADO_ANUN estado_anuncio) {
        this.estado_anuncio = estado_anuncio;
    }

    public String getUrl() {
        return url;
    }

    public void setUrl(String url) {
        this.url = url;
    }

    public Date getFecha_inicio() {
        return fecha_inicio;
    }

    public void setFecha_inicio(Date fecha_inicio) {
        this.fecha_inicio = fecha_inicio;
    }

    public Date getFecha_final() {
        return fecha_final;
    }

    public void setFecha_final(Date fecha_final) {
        this.fecha_final = fecha_final;
    }

    public int getId_anunciante() {
        return id_anunciante;
    }

    public void setId_anunciante(int id_anunciante) {
        this.id_anunciante = id_anunciante;
    }

    public String getNombre_tipo() {
        return nombre_tipo;
    }

    public void setNombre_tipo(String nombre_tipo) {
        this.nombre_tipo = nombre_tipo;
    }
    
    
    
}
