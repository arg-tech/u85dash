$(document).ready(function()
{
    // View Data popover
    options = {
        html: true,
        title: 'Raw Data',
        content: '<h5>Test</h5><p>Raw data can be a transcript of a recording between individuals or some other text data.</p>' 
    }
    viewDataPopover = $('#view-data-popover')
    popover = new bootstrap.Popover(viewDataPopover, options)

    // View AIF popover
    options = {
        title: 'Formatted AIF',
        content: 'AIF is a representational mechanism for interchanging arguments between various Argument Web systems such as Arg-Nav and Ach-Nav.' 
    }
    viewAifPopover = $('#view-aif-popover')
    popover = new bootstrap.Popover(viewAifPopover, options)

    // Arg-Nav popover
    options = {
        title: 'Arg-Nav',
        content: 'Arg-Nav is a tool which allows the user to visualize and navigate the AIF representation of a transcript, showing the relationship between different arguments.' 
    }
    argNavPopover = $('#arg-nav-popover')
    popover = new bootstrap.Popover(argNavPopover, options)

    // Analytics popover
    options = {
        title: 'OVA3',
        content: '' 
    }
    ova3Popover = $('#analytics-popover')
    popover = new bootstrap.Popover(ova3Popover, options)

    // Analytics popover
    options = {
        title: 'Ach-Nav',
        content: '' 
    }
    achNavPopover = $('#ach-nav-popover')
    popover = new bootstrap.Popover(achNavPopover, options)

    // Analytics popover
    options = {
        title: 'Critique Player',
        content: ''
    }
    critiquePlayerPopover = $('#critique-popover')
    popover = new bootstrap.Popover(critiquePlayerPopover, options)
})
