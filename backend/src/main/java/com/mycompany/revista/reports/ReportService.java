/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.mycompany.revista.reports;

import com.mycompany.revista.conexion.Conexion;
import java.io.InputStream;
import java.io.OutputStream;
import java.time.LocalDate;
import java.time.ZoneId;
import java.util.Base64;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;
import java.util.logging.Level;
import java.util.logging.Logger;
import net.sf.jasperreports.engine.JRException;
import net.sf.jasperreports.engine.JasperExportManager;
import net.sf.jasperreports.engine.JasperFillManager;
import net.sf.jasperreports.engine.JasperPrint;

/**
 *
 * @author daniel
 */
public class ReportService {

    public ReportService() {
        new Conexion();
    }

    public String printReport(String name) {
        try {
            InputStream compiledReport = getClass().getClassLoader().getResourceAsStream("com/mycompany/revista/rep/"+name);
            JasperPrint printer = JasperFillManager.fillReport(compiledReport, null, Conexion.getInstancia());
            byte[] exportToPdf = JasperExportManager.exportReportToPdf(printer);
            String fin= Base64.getEncoder().encodeToString(exportToPdf);
            return fin;
        } catch (JRException ex) {
            System.out.println(ex);
        }
        return null;
        
    }
     public String printReportWithParams(LocalDate startDate, LocalDate endDate,String usuario, String name) throws JRException {
        Date start = Date.from(startDate.atStartOfDay(ZoneId.systemDefault()).toInstant());
        Date end = Date.from(endDate.atStartOfDay(ZoneId.systemDefault()).toInstant());
        InputStream compiledReport = getClass().getClassLoader().getResourceAsStream("com/mycompany/revista/rep/"+name);
        Map<String, Object> params = new HashMap<>();
         System.out.println(start);
         System.out.println(usuario);
         System.out.println(end);
        params.put("User", usuario);
        params.put("StartDate", start);
        params.put("EndDate", end);
        JasperPrint printer = JasperFillManager.fillReport(compiledReport, params, Conexion.getInstancia());

       byte[] exportToPdf= JasperExportManager.exportReportToPdf(printer);
       String fin= Base64.getEncoder().encodeToString(exportToPdf);
         System.out.println(fin);
       return fin;
    }

}
