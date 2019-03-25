angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    

      .state('iNGEOTECUNLaR.inicio', {
    url: '/page1',
    views: {
      'side-menu21': {
        templateUrl: 'templates/inicio.html',
        controller: 'inicioCtrl'
      }
    }
  })

  .state('iNGEOTECUNLaR.contactoINGEOTEC', {
    url: '/page2',
    views: {
      'side-menu21': {
        templateUrl: 'templates/contactoINGEOTEC.html',
        controller: 'contactoINGEOTECCtrl'
      }
    }
  })

  .state('iNGEOTECUNLaR.acercaDeLaApp', {
    url: '/page3',
    views: {
      'side-menu21': {
        templateUrl: 'templates/acercaDeLaApp.html',
        controller: 'acercaDeLaAppCtrl'
      }
    }
  })

  .state('iNGEOTECUNLaR', {
    url: '/side-menu21',
    templateUrl: 'templates/iNGEOTECUNLaR.html',
    controller: 'iNGEOTECUNLaRCtrl'
  })

  .state('iNGEOTECUNLaR.comisiNEjecutiva', {
    url: '/page4',
    views: {
      'side-menu21': {
        templateUrl: 'templates/comisiNEjecutiva.html',
        controller: 'comisiNEjecutivaCtrl'
      }
    }
  })

  .state('iNGEOTECUNLaR.ingresantes', {
    url: '/page5',
    views: {
      'side-menu21': {
        templateUrl: 'templates/ingresantes.html',
        controller: 'ingresantesCtrl'
      }
    }
  })

  .state('iNGEOTECUNLaR.planesDeEstudios', {
    url: '/page6',
    views: {
      'side-menu21': {
        templateUrl: 'templates/planesDeEstudios.html',
        controller: 'planesDeEstudiosCtrl'
      }
    }
  })

  .state('iNGEOTECUNLaR.planDeGeologA', {
    url: '/page7',
    views: {
      'side-menu21': {
        templateUrl: 'templates/planDeGeologA.html',
        controller: 'planDeGeologACtrl'
      }
    }
  })

  .state('iNGEOTECUNLaR.planDeIngAgronMica', {
    url: '/page8',
    views: {
      'side-menu21': {
        templateUrl: 'templates/planDeIngAgronMica.html',
        controller: 'planDeIngAgronMicaCtrl'
      }
    }
  })

  .state('iNGEOTECUNLaR.planIngAgroindustrial', {
    url: '/page9',
    views: {
      'side-menu21': {
        templateUrl: 'templates/planIngAgroindustrial.html',
        controller: 'planIngAgroindustrialCtrl'
      }
    }
  })

  .state('iNGEOTECUNLaR.planDeIngEnAlimentos', {
    url: '/page10',
    views: {
      'side-menu21': {
        templateUrl: 'templates/planDeIngEnAlimentos.html',
        controller: 'planDeIngEnAlimentosCtrl'
      }
    }
  })

  .state('iNGEOTECUNLaR.planDeIngCivil', {
    url: '/page11',
    views: {
      'side-menu21': {
        templateUrl: 'templates/planDeIngCivil.html',
        controller: 'planDeIngCivilCtrl'
      }
    }
  })

  .state('iNGEOTECUNLaR.planDeIngIndustrial', {
    url: '/page12',
    views: {
      'side-menu21': {
        templateUrl: 'templates/planDeIngIndustrial.html',
        controller: 'planDeIngIndustrialCtrl'
      }
    }
  })

  .state('iNGEOTECUNLaR.planDeIngDeMinas', {
    url: '/page13',
    views: {
      'side-menu21': {
        templateUrl: 'templates/planDeIngDeMinas.html',
        controller: 'planDeIngDeMinasCtrl'
      }
    }
  })

  .state('iNGEOTECUNLaR.planDeTecElectroElectrNica', {
    url: '/page14',
    views: {
      'side-menu21': {
        templateUrl: 'templates/planDeTecElectroElectrNica.html',
        controller: 'planDeTecElectroElectrNicaCtrl'
      }
    }
  })

  .state('iNGEOTECUNLaR.planDeArquitectura', {
    url: '/page15',
    views: {
      'side-menu21': {
        templateUrl: 'templates/planDeArquitectura.html',
        controller: 'planDeArquitecturaCtrl'
      }
    }
  })

  .state('iNGEOTECUNLaR.requisitosDeIngreso', {
    url: '/page16',
    views: {
      'side-menu21': {
        templateUrl: 'templates/requisitosDeIngreso.html',
        controller: 'requisitosDeIngresoCtrl'
      }
    }
  })

  .state('iNGEOTECUNLaR.horariosCursillo', {
    url: '/page18',
    views: {
      'side-menu21': {
        templateUrl: 'templates/horariosCursillo.html',
        controller: 'horariosCursilloCtrl'
      }
    }
  })

  .state('iNGEOTECUNLaR.calendarioAcadMico', {
    url: '/page19',
    views: {
      'side-menu21': {
        templateUrl: 'templates/calendarioAcadMico.html',
        controller: 'calendarioAcadMicoCtrl'
      }
    }
  })

  .state('iNGEOTECUNLaR.mapaCiudadUniversitaria', {
    url: '/page20',
    views: {
      'side-menu21': {
        templateUrl: 'templates/mapaCiudadUniversitaria.html',
        controller: 'mapaCiudadUniversitariaCtrl'
      }
    }
  })

  .state('iNGEOTECUNLaR.graduados', {
    url: '/page21',
    views: {
      'side-menu21': {
        templateUrl: 'templates/graduados.html',
        controller: 'graduadosCtrl'
      }
    }
  })

  .state('iNGEOTECUNLaR.adscripciones', {
    url: '/page22',
    views: {
      'side-menu21': {
        templateUrl: 'templates/adscripciones.html',
        controller: 'adscripcionesCtrl'
      }
    }
  })

  .state('iNGEOTECUNLaR.fechasDeColaciN', {
    url: '/page23',
    views: {
      'side-menu21': {
        templateUrl: 'templates/fechasDeColaciN.html',
        controller: 'fechasDeColaciNCtrl'
      }
    }
  })

  .state('iNGEOTECUNLaR.obraSocialGraduados', {
    url: '/page24',
    views: {
      'side-menu21': {
        templateUrl: 'templates/obraSocialGraduados.html',
        controller: 'obraSocialGraduadosCtrl'
      }
    }
  })

  .state('iNGEOTECUNLaR.proyectosDeExtensiN', {
    url: '/page25',
    views: {
      'side-menu21': {
        templateUrl: 'templates/proyectosDeExtensiN.html',
        controller: 'proyectosDeExtensiNCtrl'
      }
    }
  })

  .state('iNGEOTECUNLaR.trMiteDeTTulo', {
    url: '/page26',
    views: {
      'side-menu21': {
        templateUrl: 'templates/trMiteDeTTulo.html',
        controller: 'trMiteDeTTuloCtrl'
      }
    }
  })

  .state('iNGEOTECUNLaR.redDeTrabajo', {
    url: '/page27',
    views: {
      'side-menu21': {
        templateUrl: 'templates/redDeTrabajo.html',
        controller: 'redDeTrabajoCtrl'
      }
    }
  })

  .state('iNGEOTECUNLaR.estudiantes', {
    url: '/page28',
    views: {
      'side-menu21': {
        templateUrl: 'templates/estudiantes.html',
        controller: 'estudiantesCtrl'
      }
    }
  })

  .state('iNGEOTECUNLaR.infoExMenesFinales', {
    url: '/page29',
    views: {
      'side-menu21': {
        templateUrl: 'templates/infoExMenesFinales.html',
        controller: 'infoExMenesFinalesCtrl'
      }
    }
  })

  .state('iNGEOTECUNLaR.eVAUNLaR', {
    url: '/page30',
    views: {
      'side-menu21': {
        templateUrl: 'templates/eVAUNLaR.html',
        controller: 'eVAUNLaRCtrl'
      }
    }
  })

  .state('iNGEOTECUNLaR.sIU', {
    url: '/page31',
    views: {
      'side-menu21': {
        templateUrl: 'templates/sIU.html',
        controller: 'sIUCtrl'
      }
    }
  })

  .state('iNGEOTECUNLaR.beneficios', {
    url: '/page32',
    views: {
      'side-menu21': {
        templateUrl: 'templates/beneficios.html',
        controller: 'beneficiosCtrl'
      }
    }
  })

  .state('iNGEOTECUNLaR.comedorUniversitario', {
    url: '/page33',
    views: {
      'side-menu21': {
        templateUrl: 'templates/comedorUniversitario.html',
        controller: 'comedorUniversitarioCtrl'
      }
    }
  })

  .state('iNGEOTECUNLaR.bibliotecaCentral', {
    url: '/page34',
    views: {
      'side-menu21': {
        templateUrl: 'templates/bibliotecaCentral.html',
        controller: 'bibliotecaCentralCtrl'
      }
    }
  })

  .state('iNGEOTECUNLaR.licenciaEstudiantil', {
    url: '/page35',
    views: {
      'side-menu21': {
        templateUrl: 'templates/licenciaEstudiantil.html',
        controller: 'licenciaEstudiantilCtrl'
      }
    }
  })

  .state('iNGEOTECUNLaR.seguroEstudiantil', {
    url: '/page36',
    views: {
      'side-menu21': {
        templateUrl: 'templates/seguroEstudiantil.html',
        controller: 'seguroEstudiantilCtrl'
      }
    }
  })

  .state('iNGEOTECUNLaR.museoUNLaR', {
    url: '/page39',
    views: {
      'side-menu21': {
        templateUrl: 'templates/museoUNLaR.html',
        controller: 'museoUNLaRCtrl'
      }
    }
  })

  .state('iNGEOTECUNLaR.deporte', {
    url: '/page40',
    views: {
      'side-menu21': {
        templateUrl: 'templates/deporte.html',
        controller: 'deporteCtrl'
      }
    }
  })

  .state('iNGEOTECUNLaR.salaDePrimerosAuxilios', {
    url: '/page41',
    views: {
      'side-menu21': {
        templateUrl: 'templates/salaDePrimerosAuxilios.html',
        controller: 'salaDePrimerosAuxiliosCtrl'
      }
    }
  })

  .state('iNGEOTECUNLaR.trMites', {
    url: '/page42',
    views: {
      'side-menu21': {
        templateUrl: 'templates/trMites.html',
        controller: 'trMitesCtrl'
      }
    }
  })

  .state('iNGEOTECUNLaR.solicitarMesaEspecial', {
    url: '/page43',
    views: {
      'side-menu21': {
        templateUrl: 'templates/solicitarMesaEspecial.html',
        controller: 'solicitarMesaEspecialCtrl'
      }
    }
  })

  .state('iNGEOTECUNLaR.solicitarEquivalencias', {
    url: '/page44',
    views: {
      'side-menu21': {
        templateUrl: 'templates/solicitarEquivalencias.html',
        controller: 'solicitarEquivalenciasCtrl'
      }
    }
  })

  .state('iNGEOTECUNLaR.cambioDePlanDeEstudios', {
    url: '/page45',
    views: {
      'side-menu21': {
        templateUrl: 'templates/cambioDePlanDeEstudios.html',
        controller: 'cambioDePlanDeEstudiosCtrl'
      }
    }
  })

  .state('iNGEOTECUNLaR.cancelaciNDeMatrCula', {
    url: '/page46',
    views: {
      'side-menu21': {
        templateUrl: 'templates/cancelaciNDeMatrCula.html',
        controller: 'cancelaciNDeMatrCulaCtrl'
      }
    }
  })

  .state('iNGEOTECUNLaR.duplicadoDeLibreta', {
    url: '/page47',
    views: {
      'side-menu21': {
        templateUrl: 'templates/duplicadoDeLibreta.html',
        controller: 'duplicadoDeLibretaCtrl'
      }
    }
  })

  .state('iNGEOTECUNLaR.certificadoDeAlumnoRegular', {
    url: '/page48',
    views: {
      'side-menu21': {
        templateUrl: 'templates/certificadoDeAlumnoRegular.html',
        controller: 'certificadoDeAlumnoRegularCtrl'
      }
    }
  })

  .state('iNGEOTECUNLaR.certificadoDeAlumnoInscripto', {
    url: '/page49',
    views: {
      'side-menu21': {
        templateUrl: 'templates/certificadoDeAlumnoInscripto.html',
        controller: 'certificadoDeAlumnoInscriptoCtrl'
      }
    }
  })

  .state('iNGEOTECUNLaR.ayudanteAlumno', {
    url: '/page50',
    views: {
      'side-menu21': {
        templateUrl: 'templates/ayudanteAlumno.html',
        controller: 'ayudanteAlumnoCtrl'
      }
    }
  })

  .state('iNGEOTECUNLaR.corregirDatosPersonales', {
    url: '/page51',
    views: {
      'side-menu21': {
        templateUrl: 'templates/corregirDatosPersonales.html',
        controller: 'corregirDatosPersonalesCtrl'
      }
    }
  })

  .state('iNGEOTECUNLaR.trMiteDeTTulo2', {
    url: '/page52',
    views: {
      'side-menu21': {
        templateUrl: 'templates/trMiteDeTTulo2.html',
        controller: 'trMiteDeTTulo2Ctrl'
      }
    }
  })

  .state('iNGEOTECUNLaR.nDeExpedienteDeMiTrMite', {
    url: '/page53',
    views: {
      'side-menu21': {
        templateUrl: 'templates/nDeExpedienteDeMiTrMite.html',
        controller: 'nDeExpedienteDeMiTrMiteCtrl'
      }
    }
  })

  .state('iNGEOTECUNLaR.inicioDeTrabajoFinal', {
    url: '/page54',
    views: {
      'side-menu21': {
        templateUrl: 'templates/inicioDeTrabajoFinal.html',
        controller: 'inicioDeTrabajoFinalCtrl'
      }
    }
  })

  .state('iNGEOTECUNLaR.reglamentos', {
    url: '/page55',
    views: {
      'side-menu21': {
        templateUrl: 'templates/reglamentos.html',
        controller: 'reglamentosCtrl'
      }
    }
  })

  .state('iNGEOTECUNLaR.reglamentoDeAlumnos', {
    url: '/page37',
    views: {
      'side-menu21': {
        templateUrl: 'templates/reglamentoDeAlumnos.html',
        controller: 'reglamentoDeAlumnosCtrl'
      }
    }
  })

  .state('iNGEOTECUNLaR.protocoloDeViolenciaDeGenero', {
    url: '/page38',
    views: {
      'side-menu21': {
        templateUrl: 'templates/protocoloDeViolenciaDeGenero.html',
        controller: 'protocoloDeViolenciaDeGeneroCtrl'
      }
    }
  })

  .state('iNGEOTECUNLaR.estatutoUniversitario', {
    url: '/page56',
    views: {
      'side-menu21': {
        templateUrl: 'templates/estatutoUniversitario.html',
        controller: 'estatutoUniversitarioCtrl'
      }
    }
  })

  .state('iNGEOTECUNLaR.becasDeIncentivoAcadMico', {
    url: '/page57',
    views: {
      'side-menu21': {
        templateUrl: 'templates/becasDeIncentivoAcadMico.html',
        controller: 'becasDeIncentivoAcadMicoCtrl'
      }
    }
  })

  .state('iNGEOTECUNLaR.becasTransporte', {
    url: '/page62',
    views: {
      'side-menu21': {
        templateUrl: 'templates/becasTransporte.html',
        controller: 'becasTransporteCtrl'
      }
    }
  })

  .state('iNGEOTECUNLaR.becasDeExperienciaLaboral', {
    url: '/page58',
    views: {
      'side-menu21': {
        templateUrl: 'templates/becasDeExperienciaLaboral.html',
        controller: 'becasDeExperienciaLaboralCtrl'
      }
    }
  })

  .state('iNGEOTECUNLaR.becasProgresar', {
    url: '/page63',
    views: {
      'side-menu21': {
        templateUrl: 'templates/becasProgresar.html',
        controller: 'becasProgresarCtrl'
      }
    }
  })

  .state('iNGEOTECUNLaR.becasDeTutorAsAcadMicas', {
    url: '/page59',
    views: {
      'side-menu21': {
        templateUrl: 'templates/becasDeTutorAsAcadMicas.html',
        controller: 'becasDeTutorAsAcadMicasCtrl'
      }
    }
  })

  .state('iNGEOTECUNLaR.ayudanteInvestigador', {
    url: '/page64',
    views: {
      'side-menu21': {
        templateUrl: 'templates/ayudanteInvestigador.html',
        controller: 'ayudanteInvestigadorCtrl'
      }
    }
  })

  .state('iNGEOTECUNLaR.preIniciaciNALaInvestigaciN', {
    url: '/page65',
    views: {
      'side-menu21': {
        templateUrl: 'templates/preIniciaciNALaInvestigaciN.html',
        controller: 'preIniciaciNALaInvestigaciNCtrl'
      }
    }
  })

  .state('iNGEOTECUNLaR.tutorAsIngreso', {
    url: '/page60',
    views: {
      'side-menu21': {
        templateUrl: 'templates/tutorAsIngreso.html',
        controller: 'tutorAsIngresoCtrl'
      }
    }
  })

  .state('iNGEOTECUNLaR.convocatoriaBecas', {
    url: '/page61',
    views: {
      'side-menu21': {
        templateUrl: 'templates/convocatoriaBecas.html',
        controller: 'convocatoriaBecasCtrl'
      }
    }
  })

  .state('iNGEOTECUNLaR.vinculaciNTecnolGica', {
    url: '/page66',
    views: {
      'side-menu21': {
        templateUrl: 'templates/vinculaciNTecnolGica.html',
        controller: 'vinculaciNTecnolGicaCtrl'
      }
    }
  })

  .state('iNGEOTECUNLaR.horarios1Cuatrimestre', {
    url: '/page67',
    views: {
      'side-menu21': {
        templateUrl: 'templates/horarios1Cuatrimestre.html',
        controller: 'horarios1CuatrimestreCtrl'
      }
    }
  })

  .state('iNGEOTECUNLaR.horarioGeologA', {
    url: '/page68',
    views: {
      'side-menu21': {
        templateUrl: 'templates/horarioGeologA.html',
        controller: 'horarioGeologACtrl'
      }
    }
  })

  .state('iNGEOTECUNLaR.horarioAgronMica', {
    url: '/page69',
    views: {
      'side-menu21': {
        templateUrl: 'templates/horarioAgronMica.html',
        controller: 'horarioAgronMicaCtrl'
      }
    }
  })

  .state('iNGEOTECUNLaR.horarioAgroindustrial', {
    url: '/page70',
    views: {
      'side-menu21': {
        templateUrl: 'templates/horarioAgroindustrial.html',
        controller: 'horarioAgroindustrialCtrl'
      }
    }
  })

  .state('iNGEOTECUNLaR.horarioAlimentos', {
    url: '/page71',
    views: {
      'side-menu21': {
        templateUrl: 'templates/horarioAlimentos.html',
        controller: 'horarioAlimentosCtrl'
      }
    }
  })

  .state('iNGEOTECUNLaR.horarioCivil', {
    url: '/page72',
    views: {
      'side-menu21': {
        templateUrl: 'templates/horarioCivil.html',
        controller: 'horarioCivilCtrl'
      }
    }
  })

  .state('iNGEOTECUNLaR.horarioIndustrial', {
    url: '/page73',
    views: {
      'side-menu21': {
        templateUrl: 'templates/horarioIndustrial.html',
        controller: 'horarioIndustrialCtrl'
      }
    }
  })

  .state('iNGEOTECUNLaR.horarioMinas', {
    url: '/page74',
    views: {
      'side-menu21': {
        templateUrl: 'templates/horarioMinas.html',
        controller: 'horarioMinasCtrl'
      }
    }
  })

  .state('iNGEOTECUNLaR.horarioElectroElectrNica', {
    url: '/page75',
    views: {
      'side-menu21': {
        templateUrl: 'templates/horarioElectroElectrNica.html',
        controller: 'horarioElectroElectrNicaCtrl'
      }
    }
  })

  .state('iNGEOTECUNLaR.horarioArquitectura', {
    url: '/page76',
    views: {
      'side-menu21': {
        templateUrl: 'templates/horarioArquitectura.html',
        controller: 'horarioArquitecturaCtrl'
      }
    }
  })

  .state('iNGEOTECUNLaR.becaExtensionista', {
    url: '/page17',
    views: {
      'side-menu21': {
        templateUrl: 'templates/becaExtensionista.html',
        controller: 'becaExtensionistaCtrl'
      }
    }
  })

  .state('iNGEOTECUNLaR.becasDeportivasYCulturales', {
    url: '/page77',
    views: {
      'side-menu21': {
        templateUrl: 'templates/becasDeportivasYCulturales.html',
        controller: 'becasDeportivasYCulturalesCtrl'
      }
    }
  })

$urlRouterProvider.otherwise('/side-menu21/page1')


});