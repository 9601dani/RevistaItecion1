/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Interface.java to edit this template
 */
package com.mycompany.revista.dao;

import com.mycompany.revista.clases.Categoria;
import com.mycompany.revista.clases.Etiqueta;
import com.mycompany.revista.clases.Etiqueta_autor;
import com.mycompany.revista.clases.Etiqueta_revista;
import java.util.ArrayList;

/**
 *
 * @author daniel
 */
public interface EtiquetaDao extends CRUD<Etiqueta>{
        String saveEtiquetaRev(Etiqueta_revista t);
        ArrayList<Etiqueta> getETForRev(int id);
        ArrayList<Etiqueta> getETForUser(String user_name );
        String deleteETForUser(Etiqueta_autor t);
        String saveCategoria(Categoria c);
}
