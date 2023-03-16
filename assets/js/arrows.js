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
    raw = document.getElementById('raw-data');
    ova = document.getElementById('ova3');
    argNav = document.getElementById('arg-nav');
    aifDb = document.getElementById('aif-db');
    achNav = document.getElementById('ach-nav');
    critique = document.getElementById('critique');

    if (window.innerWidth <= 768)
    {
        // Create line
        rawToAif = new LeaderLine(
            raw,
            LeaderLine.pointAnchor(ova, {x: '100%', y: '50%'}),
            {dash: {animation: true}, startSocket: 'right', endSocket: 'right', size: 6, animOptions: { duration: 'ease-in-out' }, hide: true, middleLabel: LeaderLine.pathLabel('Convert to AIF')}
        );

        aifToVisualize = new LeaderLine(
            ova,
            LeaderLine.pointAnchor(argNav, {x: '100%', y: '50%'}),
            {dash: {animation: true}, startSocket: 'right', endSocket: 'right', size: 6, animOptions: { duration: 'ease-in-out' }, hide: true, middleLabel: LeaderLine.pathLabel('Visualize Arguments')}
        );

        aifToAnalytics = new LeaderLine(
            ova,
            LeaderLine.pointAnchor(aifDb, {x: '0%', y: '50%'}),
            {dash: {animation: true}, startSocket: 'left', endSocket: 'left', size: 6, animOptions: { duration: 'ease-in-out' }, hide: true, middleLabel: LeaderLine.pathLabel('Data Curation')}
        );

        aifToInterrogate = new LeaderLine(
            ova,
            LeaderLine.pointAnchor(achNav, {x: '100%', y: '50%'}),
            {dash: {animation: true}, startSocket: 'right', endSocket: 'right', size: 6, animOptions: { duration: 'ease-in-out' }, hide: true, middleLabel: LeaderLine.pathLabel('Interrogate Hypotheses'), startSocketGravity: [200, 0]}
        );

        aifToCritique = new LeaderLine(
            ova,
            LeaderLine.pointAnchor(critique, {x: '0%', y: '50%'}),
            {dash: {animation: true}, startSocket: 'left', endSocket: 'left', size: 6, animOptions: { duration: 'ease-in-out' }, hide: true, middleLabel: LeaderLine.pathLabel('Critique Methods'), startSocketGravity: [-200, 0]}
        );
    }
    else if (collapse == false)
    {
        rawToAif = new LeaderLine(
            raw,
            LeaderLine.pointAnchor(ova, {x: 0, y: '50%'}),
            {dash: {animation: true}, startSocket: 'right', endSocket: 'left', size: 6, animOptions: { duration: 'ease-in-out' }, hide: true, middleLabel: LeaderLine.pathLabel('Convert to AIF')}
        );
    
        aifToVisualize = new LeaderLine(
            ova,
            LeaderLine.pointAnchor(argNav, {x: 0, y: '50%'}),
            {dash: {animation: true}, startSocket: 'top', endSocket: 'left', size: 6, hide: true, middleLabel: LeaderLine.pathLabel('Visualise Arguments')}
        );
    
        aifToAnalytics = new LeaderLine(
            LeaderLine.pointAnchor(ova, {x: '100%', y: '25%'}),
            LeaderLine.pointAnchor(aifDb, {x: 0, y: '50%'}),
            {dash: {animation: true}, startSocket: 'right', endSocket: 'left', size: 6, hide: true, middleLabel: LeaderLine.pathLabel('Data Curation')}
        );
    
        aifToInterrogate = new LeaderLine(
            LeaderLine.pointAnchor(ova, {x: '100%', y: '80%'}),
            LeaderLine.pointAnchor(achNav, {x: 0, y: '50%'}),
            {dash: {animation: true}, startSocket: 'right', endSocket: 'left', size: 6, hide: true, middleLabel: LeaderLine.pathLabel('Interrogate Hypotheses')}
        );
    
        aifToCritique = new LeaderLine(
            ova,
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
            removeArrows();
            evalArrows();
            renderArrows();
    }, 200);
});