/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.mycompany.revista.clases;

import com.mycompany.revista.Enum.COMENTARIO_E;
import com.mycompany.revista.Enum.ESTADO_REV;
import com.mycompany.revista.Enum.ME_GUSTA_E;
import com.mycompany.revista.Enum.SUSCRIP_E;
import java.io.InputStream;
import java.math.BigDecimal;
import java.sql.Blob;
import java.sql.Date;
import java.time.LocalDate;

/**
 *
 * @author daniel
 */
public class Revista {
    private int id_revista;
    private String nombre_revista;
    private InputStream archivo;
    private String fecha_publicacion;
    private String descripcion;
    private String fecha_aceptacion;
    private ESTADO_REV estado_revista;
    private BigDecimal costo_dia;
    private String fecha_mod_costo;
    private BigDecimal costo_suscripcion;
    private ME_GUSTA_E me_gusta;
    private COMENTARIO_E comentario;
    private SUSCRIP_E suscripciones;
    private String nombre_categoria;
    private String nombre_usuario;
    
   //CONSTRUCTOR COMPLETO

    public Revista(int id_revista, String nombre_revista, InputStream archivo, String fecha_publicacion, String descripcion, String fecha_aceptacion, ESTADO_REV estado_revista, BigDecimal costo_dia, String fecha_mod_costo, BigDecimal costo_suscripcion, ME_GUSTA_E me_gusta, COMENTARIO_E comentario, SUSCRIP_E suscripciones, String nombre_categoria, String nombre_usuario) {
        this.id_revista = id_revista;
        this.nombre_revista = nombre_revista;
        this.archivo = archivo;
        this.fecha_publicacion = fecha_publicacion;
        this.descripcion = descripcion;
        this.fecha_aceptacion = fecha_aceptacion;
        this.estado_revista = estado_revista;
        this.costo_dia = costo_dia;
        this.fecha_mod_costo = fecha_mod_costo;
        this.costo_suscripcion = costo_suscripcion;
        this.me_gusta = me_gusta;
        this.comentario = comentario;
        this.suscripciones = suscripciones;
        this.nombre_categoria = nombre_categoria;
        this.nombre_usuario = nombre_usuario;
    }
    ///CONSTRUCTOR SEMI

    public Revista(String nombre_revista, InputStream archivo, String fecha_publicacion, String descripcion, String fecha_aceptacion, ESTADO_REV estado_revista, BigDecimal costo_dia, String fecha_mod_costo, BigDecimal costo_suscripcion, ME_GUSTA_E me_gusta, COMENTARIO_E comentario, SUSCRIP_E suscripciones, String nombre_categoria, String nombre_usuario) {
        this.nombre_revista = nombre_revista;
        this.archivo = archivo;
        this.fecha_publicacion = fecha_publicacion;
        this.descripcion = descripcion;
        this.fecha_aceptacion = fecha_aceptacion;
        this.estado_revista = estado_revista;
        this.costo_dia = costo_dia;
        this.fecha_mod_costo = fecha_mod_costo;
        this.costo_suscripcion = costo_suscripcion;
        this.me_gusta = me_gusta;
        this.comentario = comentario;
        this.suscripciones = suscripciones;
        this.nombre_categoria = nombre_categoria;
        this.nombre_usuario = nombre_usuario;
    }

    public Revista(String nombre_revista, InputStream archivo, String fecha_publicacion, String descripcion, ESTADO_REV estado_revista, BigDecimal costo_suscripcion, ME_GUSTA_E me_gusta, COMENTARIO_E comentario, SUSCRIP_E suscripciones, String nombre_categoria, String nombre_usuario) {
        this.nombre_revista = nombre_revista;
        this.archivo = archivo;
        this.fecha_publicacion = fecha_publicacion;
        this.descripcion = descripcion;
        this.estado_revista = estado_revista;
        this.costo_suscripcion = costo_suscripcion;
        this.me_gusta = me_gusta;
        this.comentario = comentario;
        this.suscripciones = suscripciones;
        this.nombre_categoria = nombre_categoria;
        this.nombre_usuario = nombre_usuario;
    }

    public Revista(int id_revista, String nombre_revista, InputStream archivo, String fecha_publicacion, String descripcion, ESTADO_REV estado_revista, BigDecimal costo_suscripcion, ME_GUSTA_E me_gusta, COMENTARIO_E comentario, SUSCRIP_E suscripciones, String nombre_categoria) {
        this.id_revista = id_revista;
        this.nombre_revista = nombre_revista;
        this.archivo = archivo;
        this.fecha_publicacion = fecha_publicacion;
        this.descripcion = descripcion;
        this.estado_revista = estado_revista;
        this.costo_suscripcion = costo_suscripcion;
        this.me_gusta = me_gusta;
        this.comentario = comentario;
        this.suscripciones = suscripciones;
        this.nombre_categoria = nombre_categoria;
    }
    
    
    
    

    public int getId_revista() {
        return id_revista;
    }

    public void setId_revista(int id_revista) {
        this.id_revista = id_revista;
    }

    public String getNombre_revista() {
        return nombre_revista;
    }

    public void setNombre_revista(String nombre_revista) {
        this.nombre_revista = nombre_revista;
    }

    public InputStream getArchivo() {
        return archivo;
    }

    public void setArchivo(InputStream archivo) {
        this.archivo = archivo;
    }

    public Date getFecha_publicacion() {
       
        return Date.valueOf(this.fecha_publicacion);
    }

    public void setFecha_publicacion(String fecha_publicacion) {
        this.fecha_publicacion = fecha_publicacion;
    }

    public String getDescripcion() {
        return descripcion;
    }

    public void setDescripcion(String descripcion) {
        this.descripcion = descripcion;
    }

    public Date getFecha_aceptacion() {
        
        return Date.valueOf(fecha_aceptacion);
    }

    public void setFecha_aceptacion(String fecha_aceptacion) {
        this.fecha_aceptacion = fecha_aceptacion;
    }

    public ESTADO_REV getEstado_revista() {
        return estado_revista;
    }

    public void setEstado_revista(ESTADO_REV estado_revista) {
        this.estado_revista = estado_revista;
    }

    public BigDecimal getCosto_dia() {
        return costo_dia;
    }

    public void setCosto_dia(BigDecimal costo_dia) {
        this.costo_dia = costo_dia;
    }

    public Date getFecha_mod_costo() {
        return Date.valueOf(fecha_mod_costo);
    }

    public void setFecha_mod_costo(String fecha_mod_costo) {
        this.fecha_mod_costo = fecha_mod_costo;
    }

    public BigDecimal getCosto_suscripcion() {
        return costo_suscripcion;
    }

    public void setCosto_suscripcion(BigDecimal costo_suscripcion) {
        this.costo_suscripcion = costo_suscripcion;
    }

    public ME_GUSTA_E getMe_gusta() {
        return me_gusta;
    }

    public void setMe_gusta(ME_GUSTA_E me_gusta) {
        this.me_gusta = me_gusta;
    }

    public COMENTARIO_E getComentario() {
        return comentario;
    }

    public void setComentario(COMENTARIO_E comentario) {
        this.comentario = comentario;
    }

    public SUSCRIP_E getSuscripciones() {
        return suscripciones;
    }

    public void setSuscripciones(SUSCRIP_E suscripciones) {
        this.suscripciones = suscripciones;
    }

    public String getNombre_categoria() {
        return nombre_categoria;
    }

    public void setNombre_categoria(String nombre_categoria) {
        this.nombre_categoria = nombre_categoria;
    }

    public String getNombre_usuario() {
        return nombre_usuario;
    }

    public void setNombre_usuario(String nombre_usuario) {
        this.nombre_usuario = nombre_usuario;
    }
    
    
    
}
