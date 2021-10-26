/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.mycompany.revista.modelsE;

import com.mycompany.revista.clases.ABeans;
import com.mycompany.revista.clases.AdminBeans;
import com.mycompany.revista.clases.Revista;
import com.mycompany.revista.clases.Usuario;
import com.mycompany.revista.conexion.Conexion;
import com.mycompany.revista.dao.ComentarioDaoImpl;
import com.mycompany.revista.dao.RevistaDaoImpl;
import com.mycompany.revista.dao.SuscripcionDaoImpl;
import java.io.InputStream;
import java.io.OutputStream;
import java.math.BigDecimal;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.Base64;
import java.util.HashMap;
import java.util.Map;
import java.util.logging.Level;
import java.util.logging.Logger;
import javax.servlet.http.HttpServlet;
import net.sf.jasperreports.engine.JRDataSource;
import net.sf.jasperreports.engine.JRException;
import net.sf.jasperreports.engine.JasperExportManager;
import net.sf.jasperreports.engine.JasperFillManager;
import net.sf.jasperreports.engine.JasperPrint;
import net.sf.jasperreports.engine.data.JRBeanCollectionDataSource;

/**
 *
 * @author daniel
 */
public class Report2User {

    public Report2User() {
        new Conexion();
    }

    public String ReportSusForRev(Usuario profile, LocalDate starDate, LocalDate endDate) {
        try {
            InputStream compiledReport = getClass().getClassLoader().getResourceAsStream("com/mycompany/revista/rep/RepRev.jasper");
            ArrayList<ABeans> revistas = getRevistaList(profile);
            ArrayList<Revista> revistList = getRevistaLists(profile);
            for (ABeans beans : revistas) {
                System.out.println(beans.getId_revista() + "--------");
                beans.setListaSuscripcion(new SuscripcionDaoImpl().consultarRep(Integer.toString(beans.getId_revista()), starDate.toString(), endDate.toString()));
            }
            for (ABeans beans : revistas) {
                beans.setRevistaList(revistList);
            }

            System.out.println("size " + revistas.size());
            JRDataSource source = new JRBeanCollectionDataSource(revistas);
            JasperPrint printer = JasperFillManager.fillReport(compiledReport, null, source);
            JasperExportManager.exportReportToPdf(printer);
            byte[] exportToPdf = JasperExportManager.exportReportToPdf(printer);
            String fin = Base64.getEncoder().encodeToString(exportToPdf);
            System.out.println(fin);
            return fin;
        } catch (JRException ex) {
            System.out.println(ex);
        }
        return null;
    }

    private ArrayList<ABeans> getRevistaList(Usuario profile) {
        ArrayList<Revista> listaRevistas = new RevistaDaoImpl().listarAlgunos(profile.getNombre_usuario());
        System.out.println(profile.getNombre_usuario() + "-");
        ArrayList<ABeans> beansList = new ArrayList<>();
        for (Revista revista : listaRevistas) {
            beansList.add(new ABeans(revista.getId_revista(), revista.getNombre_revista()));
        }
        return beansList;
    }

    private ArrayList<Revista> getRevistaLists(Usuario profile) {
        System.out.println("pase por este metodo");
        ArrayList<Revista> listaRevistas = new RevistaDaoImpl().listarAlgunos(profile.getNombre_usuario());
        System.out.println(profile.getNombre_usuario() + "-");
        ArrayList<Revista> revistList = new ArrayList<>();
        for (Revista revista : listaRevistas) {
            revistList.add(new Revista(revista.getId_revista(), revista.getNombre_revista()));
        }
        return revistList;
    }
    //REPORTE MAS LIKES DE REVISTAS

    public String ReportSusForLikes(Usuario profile) throws JRException {
        try {
            InputStream compiledReport = getClass().getClassLoader().getResourceAsStream("com/mycompany/revista/rep/ReportLikes.jasper");
            ArrayList<ABeans> revistas = getRevistaListLikes(profile);
            ArrayList<Revista> revistList = getRevistaListsLikes(profile);
            for (ABeans beans : revistas) {
                System.out.println(beans.getId_revista() + "--------");
                beans.setListUser(new RevistaDaoImpl().listarMaslike(beans.getId_revista()));
                beans.setTotalApariciones(beans.getListUser().size());
            }
            for (ABeans beans : revistas) {
                beans.setRevistaList(revistList);
            }
            JRDataSource source = new JRBeanCollectionDataSource(revistas);
            JasperPrint printer = JasperFillManager.fillReport(compiledReport, null, source);
            JasperExportManager.exportReportToPdf(printer);
            byte[] exportToPdf = JasperExportManager.exportReportToPdf(printer);
            String fin = Base64.getEncoder().encodeToString(exportToPdf);
            System.out.println(fin);
            return fin;
        } catch (JRException ex) {
            System.out.println(ex);
        }
        return null;
    }

    private ArrayList<ABeans> getRevistaListLikes(Usuario profile) {
        ArrayList<Revista> listaRevistas = new RevistaDaoImpl().listarAlgunos(profile.getNombre_usuario());
        System.out.println(profile.getNombre_usuario() + "-");
        ArrayList<ABeans> beansList = new ArrayList<>();
        for (Revista revista : listaRevistas) {
            beansList.add(new ABeans(revista.getId_revista(), revista.getNombre_revista()));
        }
        return beansList;
    }

    private ArrayList<Revista> getRevistaListsLikes(Usuario profile) {
        ArrayList<Revista> listaRevistas = new RevistaDaoImpl().listarAlgunos(profile.getNombre_usuario());
        System.out.println(profile.getNombre_usuario() + "-");
        ArrayList<Revista> revistList = new ArrayList<>();
        for (Revista revista : listaRevistas) {
            revistList.add(new Revista(revista.getId_revista(), revista.getNombre_revista()));
        }
        return revistList;
    }

    //REPORTE 3
    public String ReportGanancias(Usuario profile, String starDate, String endDate) throws JRException {

        InputStream compiledReport = getClass().getClassLoader().getResourceAsStream("com/mycompany/revista/rep/Rep4Final.jasper");
        Map<String, Object> params = new HashMap<>();
        params.put("User", profile.getNombre_usuario());
        params.put("startDate", starDate);
        params.put("endDate", endDate);
        JasperPrint printer = JasperFillManager.fillReport(compiledReport, params, Conexion.getInstancia());
        byte[] exportToPdf = JasperExportManager.exportReportToPdf(printer);
        String fin = Base64.getEncoder().encodeToString(exportToPdf);
        System.out.println(fin);
        return fin;

    }

    //REPORTES ADMIN, MAS COMENTADAS EN INTERVALO DE TIEMPO
    public String ReportMasComents(LocalDate starDate, LocalDate endDate) throws JRException {
        try {
            InputStream compiledReport = getClass().getClassLoader().getResourceAsStream("com/mycompany/revista/rep/PopularComents.jasper");
            ArrayList<AdminBeans> revista = getRevistaListForAdmin(starDate.toString(), endDate.toString());
            ArrayList<Revista> revistList = new ArrayList<>();
            for (AdminBeans beans : revista) {
                System.out.println(beans.getId_revista() + "--------");
                revistList.add(new RevistaDaoImpl().listarRev(Integer.toString(beans.getId_revista())));
            }
            for (AdminBeans beans : revista) {
                beans.setRevistaList(revistList);
            }
            for (AdminBeans beans : revista) {
                beans.setListaComents(new ComentarioDaoImpl().listComentarioDeRevistaPorFechas(beans.getId_revista(), starDate.toString(), endDate.toString()));
            }

            JRDataSource source = new JRBeanCollectionDataSource(revista);
            JasperPrint printer = JasperFillManager.fillReport(compiledReport, null, source);
            JasperExportManager.exportReportToPdf(printer);
            byte[] exportToPdf = JasperExportManager.exportReportToPdf(printer);
            String fin = Base64.getEncoder().encodeToString(exportToPdf);
            System.out.println(fin);
            return fin;
        } catch (JRException ex) {
            System.out.println(ex);
        }
        return null;
    }

    private ArrayList<AdminBeans> getRevistaListForAdmin(String starDate, String endDate) {
        ArrayList<AdminBeans> listaRevistas = new RevistaDaoImpl().listarMasComentada(starDate, endDate);
        ArrayList<AdminBeans> beansList = new ArrayList<>();
        for (AdminBeans revista : listaRevistas) {
            beansList.add(new AdminBeans(revista.getId_revista(), revista.getTotalApariciones()));
        }
        return beansList;
    }

    //reporte mas suscritos
    public String ReportMasSus(LocalDate starDate, LocalDate endDate) throws JRException {
        try {
            InputStream compiledReport = getClass().getClassLoader().getResourceAsStream("com/mycompany/revista/rep/RepMasSuscrito.jasper");
            ArrayList<ABeans> revista = getRevistaListForSus(starDate.toString(), endDate.toString());
            ArrayList<Revista> revistList = new ArrayList<>();
            for (ABeans beans : revista) {
                System.out.println(beans.getId_revista() + "--------");
                revistList.add(new RevistaDaoImpl().listarRev(Integer.toString(beans.getId_revista())));
            }
            for (ABeans beans : revista) {
                beans.setRevistaList(revistList);
            }
            for (ABeans beans : revista) {
                beans.setListaSuscripcion(new SuscripcionDaoImpl().consultarRep(Integer.toString(beans.getId_revista()), starDate.toString(), endDate.toString()));
            }

            JRDataSource source = new JRBeanCollectionDataSource(revista);
            JasperPrint printer = JasperFillManager.fillReport(compiledReport, null, source);
            JasperExportManager.exportReportToPdf(printer);
            byte[] exportToPdf = JasperExportManager.exportReportToPdf(printer);
            String fin = Base64.getEncoder().encodeToString(exportToPdf);
            System.out.println(fin);
            return fin;
        } catch (JRException ex) {
            System.out.println(ex);
        }
        return null;
    }

    private ArrayList<ABeans> getRevistaListForSus(String starDate, String endDate) {
        ArrayList<ABeans> listaRevistas = new RevistaDaoImpl().listarMasSuscrita(starDate, endDate);
        ArrayList<ABeans> beansList = new ArrayList<>();
        for (ABeans revista : listaRevistas) {
            beansList.add(new ABeans(revista.getId_revista(), revista.getTotalApariciones()));
        }
        return beansList;
    }

    //REPORTE CON NOMBRE
    public String ReportSusForLikesWhithName(String name_revista) throws JRException {
        try {
            InputStream compiledReport = getClass().getClassLoader().getResourceAsStream("com/mycompany/revista/rep/ReportLikes.jasper");
            ArrayList<ABeans> revistas = getRevistaListLikesWhitName(name_revista);
            ArrayList<Revista> revistList = getRevistaListsLikesWhitName(name_revista);
            for (ABeans beans : revistas) {
                System.out.println(beans.getId_revista() + "--------");
                beans.setListUser(new RevistaDaoImpl().listarMaslike(beans.getId_revista()));
                beans.setTotalApariciones(beans.getListUser().size());
            }
            for (ABeans beans : revistas) {
                beans.setRevistaList(revistList);
            }
            JRDataSource source = new JRBeanCollectionDataSource(revistas);
            JasperPrint printer = JasperFillManager.fillReport(compiledReport, null, source);
            JasperExportManager.exportReportToPdf(printer);
            byte[] exportToPdf = JasperExportManager.exportReportToPdf(printer);
            String fin = Base64.getEncoder().encodeToString(exportToPdf);
            System.out.println(fin);
            return fin;
        } catch (JRException ex) {
            System.out.println(ex);
        }
        return null;
    }

    private ArrayList<ABeans> getRevistaListLikesWhitName(String name) {
        ArrayList<Revista> listaRevistas = new RevistaDaoImpl().listarAlgunosForName(name);
        System.out.println(name + "-");
        ArrayList<ABeans> beansList = new ArrayList<>();
        for (Revista revista : listaRevistas) {
            beansList.add(new ABeans(revista.getId_revista(), revista.getNombre_revista()));
        }
        return beansList;
    }

    private ArrayList<Revista> getRevistaListsLikesWhitName(String name) {
        ArrayList<Revista> listaRevistas = new RevistaDaoImpl().listarAlgunosForName(name);
        System.out.println(name + "-");
        ArrayList<Revista> revistList = new ArrayList<>();
        for (Revista revista : listaRevistas) {
            revistList.add(new Revista(revista.getId_revista(), revista.getNombre_revista()));
        }
        return revistList;

    }
}
