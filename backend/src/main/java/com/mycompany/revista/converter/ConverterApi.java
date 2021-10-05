/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.mycompany.revista.converter;
import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
/**
 *
 * @author daniel
 * @param <T>
 */
public abstract class ConverterApi<T> {

    private Gson gson;
    private Class<T> typeConverter;

    public ConverterApi(Class<T> typeConverter) {
        this.typeConverter = typeConverter;
    }
    
    public T fromJson(String json) {
        this.gson = new GsonBuilder().create();
        return gson.fromJson(json, typeConverter);
    }
    
    public String toJson(T object) {
        this.gson = new GsonBuilder().setPrettyPrinting().create();
        return gson.toJson(object, typeConverter);
    }
}
