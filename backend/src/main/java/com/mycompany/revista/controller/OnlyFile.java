/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/JSP_Servlet/Servlet.java to edit this template
 */
package com.mycompany.revista.controller;

import static com.mycompany.revista.Enum.COMENTARIO_E.getCom;
import com.mycompany.revista.clases.Revista;
import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.io.PrintWriter;
import java.sql.Blob;
import java.text.SimpleDateFormat;
import java.util.Date;
import javax.servlet.ServletException;
import javax.servlet.annotation.MultipartConfig;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.Part;
import static com.mycompany.revista.Enum.ESTADO_REV.getRev1;
import static com.mycompany.revista.Enum.ESTADO_REV.getRev;
import static com.mycompany.revista.Enum.ME_GUSTA_E.getLike;
import static com.mycompany.revista.Enum.SUSCRIP_E.getSus;
import com.mycompany.revista.clases.Etiqueta;
import com.mycompany.revista.converter.EtiquetaConverter;
import com.mycompany.revista.converter.RevistaConverter;
import com.mycompany.revista.dao.RevistaDaoImpl;
import java.io.ByteArrayOutputStream;
import java.math.BigDecimal;
import org.apache.tomcat.util.http.fileupload.IOUtils;

/**
 *
 * @author daniel
 */
@WebServlet("/onlyFile")
@MultipartConfig(location = "/tmp")
public class OnlyFile extends HttpServlet {

    public static final String PATH = "/home/daniel/Prueba";
     private byte[] imagenBytes;
    /**
     * Handles the HTTP <code>POST</code> method.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
     
    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        System.out.println("RE                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  CIBI UN ARCHIVO");
        //recibo atributos
       /* Part filePart = request.getPart("datafile");
        String fileName = filePart.getHeader("Content-type");
        InputStream fileStream = filePart.getInputStream();
        
        this.imagenBytes= fileStream.readAllBytes();
        System.out.println(this.imagenBytes);
        
        System.out.println(fileName);
        System.out.println(filePart.getHeader("Content-disposition"));

        try ( BufferedReader in = new BufferedReader(new InputStreamReader(fileStream))) {
            String line = in.readLine();
            while (line != null) {
                line = in.readLine();
            }
            //  String filePath = PATH + "/" + "archivo";
            //   filePart.write(filePath);
            
            System.out.println(fileStream+" -----> mandando el archivo");*/
        System.out.println("VAMOS A OBTENER LA INFO");
        BufferedReader reader = request.getReader();
        String body = "";
        String line = reader.readLine();
        while (line != null) {
            body = body + line;
            line = reader.readLine();
        }
        System.out.println("body:");
        System.out.println(body);
            RevistaConverter converterF= new RevistaConverter(Revista.class);
            Revista revFinal= converterF.fromJson(body);
            Revista rev;
            rev = new Revista(request.getParameter("nombre_rev"),revFinal.getArchivo() , request.getParameter("fecha_pu"), request.getParameter("descripcion"),
                    getRev1(request.getParameter("estado")), new BigDecimal(request.getParameter("costo")), getLike(request.getParameter("me")),
                    getCom(request.getParameter("com")), getSus(request.getParameter("sus")), request.getParameter("ca"), request.getParameter("user"));
            RevistaDaoImpl registro = new RevistaDaoImpl();
            String m = registro.registrar(rev);
            EtiquetaConverter converter = new EtiquetaConverter(Etiqueta.class);

            if (m.equalsIgnoreCase("yes")) {
                response.getWriter().append(converter.toJson(new Etiqueta("yes")));
                System.out.println("se guardo");
            } else {
                System.out.println("no se guardo");
            }

       /* } catch (Exception ex) {
            // manejo de error
        }*/
    }

    /**
     * Returns a short description of the servlet.
     *
     * @return a String containing servlet description
     */
    @Override
    public String getServletInfo() {
        return "Short description";
    }// </editor-fold>

}
