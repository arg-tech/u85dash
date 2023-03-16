$(document).ready(function()
{
    // View Data popover
    options = {
        html: true,
        title: 'Raw Data',
        content: '<p>The textual data can consist of written text or a dialogue transcript. This can be produced post-hoc or realtime.</p>' 
    }
    viewDataPopover = $('#view-data-popover')
    popover = new bootstrap.Popover(viewDataPopover, options)

    // View AIF popover
    options = {
        title: 'OVA3',
        content: 'The OVA software supports the human analysis of argumentation, outputting diagrams in machine-readable format. ' 
    }
    viewAifPopover = $('#view-aif-popover')
    popover = new bootstrap.Popover(viewAifPopover, options)

    // Arg-Nav popover
    options = {
        title: 'Arg-Nav',
        content: 'Arg-Nav is a tool for visualising and navigating larger constellations of arguments and the relationships between them.' 
    }
    argNavPopover = $('#arg-nav-popover')
    popover = new bootstrap.Popover(argNavPopover, options)

    // Analytics popover
    options = {
        title: 'AIFdb',
        content: 'AIFdb is a repository for analysed argument data in the Argument Interchange Format (AIF).' 
    }
    ova3Popover = $('#analytics-popover')
    popover = new bootstrap.Popover(ova3Popover, options)

    // Analytics popover
    options = {
        title: 'ACH-Nav',
        content: 'A software tool supporting the structured analytic technique of Analysis of Competing Hypotheses (ACH) by digging deeper into the argumentation underpinning ACH decision-making.' 
    }
    achNavPopover = $('#ach-nav-popover')
    popover = new bootstrap.Popover(achNavPopover, options)

    // Analytics popover
    options = {
        title: 'Critique Player',
        content: 'The demonstrator shows a mock Red Teaming discussion and AI agents that automatically process the human participants’ speech and generate interjections aimed at preventing poor reasoning and potential bias.'
    }
    critiquePlayerPopover = $('#critique-popover')
    popover = new bootstrap.Popover(critiquePlayerPopover, options)
})
