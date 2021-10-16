/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Interface.java to edit this template
 */
package com.mycompany.revista.dao;

import com.mycompany.revista.clases.Etiqueta;
import com.mycompany.revista.clases.Etiqueta_revista;

/**
 *
 * @author daniel
 */
public interface EtiquetaDao extends CRUD<Etiqueta>{
        String saveEtiquetaRev(Etiqueta_revista t);
}
