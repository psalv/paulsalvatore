

$('#mobileWorkExpand').on('click', ()=>{
    if ($('#collapseWork').collapse("toggle")[0].getAttribute('aria-expanded') == 'true'){
        $('#downWork').removeClass('fa-chevron-down').addClass('fa-chevron-up');
    } else {
        $('#downWork').addClass('fa-chevron-down').removeClass('fa-chevron-up');
    }
});

$('#mobileProjectsExpand').on('click', ()=>{
    if ($('#collapseProjects').collapse("toggle")[0].getAttribute('aria-expanded') == 'true'){
        $('#downProjects').removeClass('fa-chevron-down').addClass('fa-chevron-up');
    } else {
        $('#downProjects').addClass('fa-chevron-down').removeClass('fa-chevron-up');
    }
});

