/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Interface.java to edit this template
 */
package com.mycompany.revista.dao;

import java.util.ArrayList;

/**
 *
 * @author daniel
 * @param <T>
 */
public interface CRUD<T> {
    ArrayList<T> listarTodos();
    void registrar(T t);
    void actualizar(T t);
    void eliminar(T t);
    
}
