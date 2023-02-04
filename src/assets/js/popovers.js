$(document).ready(function()
{
    // View Data popover
    options = {
        html: true,
        title: 'Raw Data',
        content: '<h5>Test</h5><p>Raw data can be a transcript of a recording between individuals or some other text data.</p>' 
    }
    exampleEl = $('#view-data-popover')
    popover = new bootstrap.Popover(exampleEl, options)

    // View AIF popover
    options = {
        title: 'Formatted AIF',
        content: 'AIF is a representational mechanism for interchanging arguments between various Argument Web systems such as Arg-Nav and Ach-Nav.' 
    }
    exampleEl = $('#view-aif-popover')
    popover = new bootstrap.Popover(exampleEl, options)

    // Arg-Nav popover
    options = {
        title: 'Arg-Nav',
        content: 'Arg-Nav is a tool which allows the user to visualize and navigate the AIF representation of a transcript, showing the relationship between different arguments.' 
    }
    exampleEl = $('#arg-nav-popover')
    popover = new bootstrap.Popover(exampleEl, options)

    // Analytics popover
    options = {
        title: 'OVA2',
        content: '' 
    }
    exampleEl = $('#analytics-popover')
    popover = new bootstrap.Popover(exampleEl, options)

    // Analytics popover
    options = {
        title: 'Ach-Nav',
        content: '' 
    }
    exampleEl = $('#ach-nav-popover')
    popover = new bootstrap.Popover(exampleEl, options)

    // Analytics popover
    options = {
        title: 'critique-popover',
        content: ''
    }
    exampleEl = $('#ach-nav-popover')
    popover = new bootstrap.Popover(exampleEl, options)
})
