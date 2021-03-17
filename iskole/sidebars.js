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
      type: 'category',
      label: 'Mine sider',
      items: ['ms_startside','ms_tilgang','ms_kontrollsenter','ms_logg','ms_planperiode','ms_personalia','ms_eget_fravaer',
      'ms_meldinger','ms_bulleteng','ms_arkiv','ms_dokumenter','ms_utlaan','ms_bibliotek'],
    },
    {
      type: 'category',
      label: 'Time- og fagfordeling',
      items: ['tf_klassefag'],
    },
    {
      type: 'category',
      label: 'Timeplan',
      items: ['timeplan_time','timeplan_reserver','timeplan_definer_blokknr','timeplan_blokknr_gruppefag'
          ,'timeplan_blokknr_klassefag','timeplan_timeplanlegge_blokknr','timeplan_timeplanlegge_klasse'
          ,'timeplan_timeplanlegge_tolaerer','timeplan_timeplanlegge_rom','timeplan_kopiering'],
    },
    {
      type: 'category',
      label: 'Emner',
      items: ['timeplanlegging','plagiatkontroll'],
    },
    {
      type: 'category',
      label: 'Docusaurus',
      items: ['doc1', 'doc2', 'doc3'],
    },
  ],
};
