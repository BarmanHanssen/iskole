module.exports = {
  someSidebar: [
    {
      type: 'doc',
      id: 'oversikt',
    },
    {
      type: 'doc',
      id: 'elev',
    },
    {
      type: 'doc',
      id: 'forelder',
    },
    {
      type: 'category',
      label: 'Mine sider',
      items: ['ms_startside','ms_tilgang','ms_kontrollsenter','ms_logg','ms_planperiode','ms_personalia','ms_eget_fravaer',
      'ms_meldinger','ms_bulleteng','ms_arkiv','ms_dokumenter','ms_utlaan','ms_bibliotek','ms_skolerute','ms_timeplan','ms_arsplan','ms_elever',
      'ms_elevsamtaler','ms_fravaer','ms_vurderinger','ms_karakterer','ms_elevmappe','ms_orden_atferd','ms_iop','ms_spraakopplaering',
      'ms_brev','ms_permisjon','ms_sensor','ms_rapporter','ms_brukerrolle','ms_foto','ms_internat'],
    },
    {
      type: 'category',
      label: 'Grunnlagsdata',
      items: ['gd_skole','gd_rom','gd_planperiode','gd_skolerute','gd_utdanningsprogram','gd_fag','gd_klasse','gd_fagklasse'
      ,'gd_ressurs_kontaktlaerer','gd_sokerportal','gd_samtykkeskjema','gd_oppslagsdata'],
    },
    {
      type: 'category',
      label: 'Time- og fagfordeling',
      items: ['tf_klassefag','tf_gruppefag','tf_tolaererfag','tf_andre_ressurser','tf_kontaktlaerer','tf_vikar_i_fag','tf_stillingsstorrelser','tf_rapporter'],
    },
    {
      type: 'category',
      label: 'Timeplan',
      items: ['timeplan_time','timeplan_reserver','timeplan_definer_blokknr','timeplan_blokknr_gruppefag'
          ,'timeplan_timeplanlegge_klasse','timeplan_timeplanlegge_tolaerer','timeplan_kopiering'],
    },
    {
      type: 'category',
      label: 'Elevadmin',
      items: ['ea_sokere','ea_elev','ea_mappe','ea_kontaktlaerer','ea_fag','ea_frav_ord_atf','ea_kardok','ea_kar_fam','ea_vitnemaal','ea_nvb'
          ,'ea_kompetansebevis','ea_vigo','ea_skyss','ea_oppflytting','ea_passord_foreldre','ea_brukernavn','ea_permisjon','ea_rapporter'],
    },
    {
      type: 'category',
      label: 'Personal',
      items: ['p_ansatt','p_grupper','p_brukernavn','p_fravaer','p_oppslagsdata','p_rapporter'],
    },
    {
      type: 'category',
      label: 'Internat',
      items: ['in_internat','in_utleie','in_rapporter'],
    },
    {
      type: 'category',
      label: 'Utlån',
      items: ['ut_pcregister','ut_pcutlaan','ut_pceksportliste','ut_pcrapporter','ut_bokregister','ut_bokutlaan'],
    },
    {
      type: 'category',
      label: 'Eksamen',
      items: ['eks_eksamenssted','eks_viktige_datoer','eks_sensor','eks_oppmelding','eks_karakterer','eks_oppmote','eks_klage','eks_pas','eks_prover','eks_rapporter'],
    },
    {
      type: 'category',
      label: 'Emner',
      items: ['timeplanlegging','plagiatkontroll'],
    },
  ],
};