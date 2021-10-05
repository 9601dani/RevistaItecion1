/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.mycompany.revista.converter;
import com.google.gson.Gson;
/**
 *
 * @author daniel
 */
public abstract class ConverterApi<T> {

    private Gson gson;
    private Class<T> typeConverter;

    public ConverterApi(Class<T> typeConverter) {
        this.gson = new Gson();
        this.typeConverter = typeConverter;
    }
    
    public T fromJson(String json) {
        return gson.fromJson(json, typeConverter);
    }
    
    public String toJson(T object) {
        return gson.toJson(object, typeConverter);
    }
}
