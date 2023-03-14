// Store state of ui
// - is collapsed or not
// Check if ui has changed beyond breakpoitn
// If it has reached new breakpoitn
// Re-render

function evalArrows()
{
    // Bools for state
    // False = not collapsed
    collapse = false;

    // LeaderLine elements
    raw = document.getElementById('view-data');
    aif = document.getElementById('view-aif');
    visualize = document.getElementById('visualize');
    analytics = document.getElementById('analytics');
    interrogate = document.getElementById('interrogate');
    critique = document.getElementById('critique');

    viewDataCard = document.getElementById("view-data");
    viewAifCard = document.getElementById("view-aif");

    if (window.innerWidth <= 768)
    {
        collapse = true;
    }
    else
    {
        collapse = false;
    }

    if (collapse == true)
    {
        // Create line
        rawToAif = new LeaderLine(
            raw,
            LeaderLine.pointAnchor(aif, {x: '100%', y: '50%'}),
            {dash: {animation: true}, startSocket: 'right', endSocket: 'right', size: 6, animOptions: { duration: 'ease-in-out' }, hide: true, middleLabel: LeaderLine.pathLabel('Convert to AIF')}
        );

        aifToVisualize = new LeaderLine(
            aif,
            LeaderLine.pointAnchor(visualize, {x: '100%', y: '50%'}),
            {dash: {animation: true}, startSocket: 'right', endSocket: 'right', size: 6, animOptions: { duration: 'ease-in-out' }, hide: true, middleLabel: LeaderLine.pathLabel('Visualize Arguments')}
        );

        aifToAnalytics = new LeaderLine(
            aif,
            LeaderLine.pointAnchor(analytics, {x: '0%', y: '50%'}),
            {dash: {animation: true}, startSocket: 'left', endSocket: 'left', size: 6, animOptions: { duration: 'ease-in-out' }, hide: true, middleLabel: LeaderLine.pathLabel('Perform Analysis')}
        );

        aifToInterrogate = new LeaderLine(
            aif,
            LeaderLine.pointAnchor(interrogate, {x: '100%', y: '50%'}),
            {dash: {animation: true}, startSocket: 'right', endSocket: 'right', size: 6, animOptions: { duration: 'ease-in-out' }, hide: true, middleLabel: LeaderLine.pathLabel('Interrogate Hypothesis'), startSocketGravity: [200, 0]}
        );

        aifToCritique = new LeaderLine(
            aif,
            LeaderLine.pointAnchor(critique, {x: '0%', y: '50%'}),
            {dash: {animation: true}, startSocket: 'left', endSocket: 'left', size: 6, animOptions: { duration: 'ease-in-out' }, hide: true, middleLabel: LeaderLine.pathLabel('Critique Methods'), startSocketGravity: [-200, 0]}
        );
    }
    else if (collapse == false)
    {
        rawToAif = new LeaderLine(
            raw,
            LeaderLine.pointAnchor(aif, {x: 0, y: '50%'}),
            {dash: {animation: true}, startSocket: 'right', endSocket: 'left', size: 6, animOptions: { duration: 'ease-in-out' }, hide: true, middleLabel: LeaderLine.pathLabel('Convert to AIF')}
        );
    
        aifToVisualize = new LeaderLine(
            aif,
            LeaderLine.pointAnchor(visualize, {x: 0, y: '50%'}),
            {dash: {animation: true}, startSocket: 'top', endSocket: 'left', size: 6, hide: true, middleLabel: LeaderLine.pathLabel('Visualise Arguments')}
        );
    
        aifToAnalytics = new LeaderLine(
            LeaderLine.pointAnchor(aif, {x: '100%', y: '25%'}),
            LeaderLine.pointAnchor(analytics, {x: 0, y: '50%'}),
            {dash: {animation: true}, startSocket: 'right', endSocket: 'left', size: 6, hide: true, middleLabel: LeaderLine.pathLabel('Perform Analysis')}
        );
    
        aifToInterrogate = new LeaderLine(
            LeaderLine.pointAnchor(aif, {x: '100%', y: '80%'}),
            LeaderLine.pointAnchor(interrogate, {x: 0, y: '50%'}),
            {dash: {animation: true}, startSocket: 'right', endSocket: 'left', size: 6, hide: true, middleLabel: LeaderLine.pathLabel('Interrogate Hypothesis')}
        );
    
        aifToCritique = new LeaderLine(
            aif,
            LeaderLine.pointAnchor(critique, {x: 0, y: '50%'}),
            {dash: {animation: true}, startSocket: 'bottom', endSocket: 'left', size: 6, hide: true, middleLabel: LeaderLine.pathLabel('Critique Methods')}
        );
    }

    return collapse;
}

function renderArrows()
{
    rawToAif.show('draw', { animOptions: { duration: 500 } });
    aifToVisualize.show('draw', { animOptions: { duration: 500 } });
    aifToAnalytics.show('draw', { animOptions: { duration: 500 } });
    aifToInterrogate.show('draw', { animOptions: { duration: 500 } });
    aifToCritique.show('draw', { animOptions: { duration: 500 } });
}

function removeArrows()
{
    rawToAif.remove()
    aifToVisualize.remove()
    aifToAnalytics.remove()
    aifToInterrogate.remove()
    aifToCritique.remove()
}

$(window).on('load', function()
{
    evalArrows();
    renderArrows();
})

$(window).resize(function() {
    clearTimeout(window.resizedFinished);
    window.resizedFinished = setTimeout(function(){
        $(document).ready(function()
        {
            removeArrows();
            evalArrows();
            renderArrows();
        })
    }, 50);
});