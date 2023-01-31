$(document).ready(function()
{
    // LeaderLine elements
    viewData = document.getElementById('view-data');
    viewAif = document.getElementById('view-aif');
    visualize = document.getElementById('visualize');
    analytics = document.getElementById('analytics');
    interrogate = document.getElementById('interrogate');
    critique = document.getElementById('critique');

    viewDataCard = document.getElementById("view-data");
    viewAifCard = document.getElementById("view-aif");

    // Wait 2 seconds
    setTimeout(function() 
    {
        console.log("test");
        leaderLine = new LeaderLine(
            viewData,
            LeaderLine.pointAnchor(viewAif, {x: 0, y: '50%'}),
            {dash: {animation: true}, startSocket: 'right', endSocket: 'left', size: 6, animOptions: { duration: 'ease-in-out' }, hide: true, middleLabel: LeaderLine.pathLabel('Convert to AIF')}
        );
        leaderLine.show('draw', { animOptions: { duration: 500 } });
    }, 200);

    setTimeout(function()
    {
        leaderLine = new LeaderLine(
            viewAif,
            LeaderLine.pointAnchor(visualize, {x: 0, y: '50%'}),
            {dash: {animation: true}, startSocket: 'top', endSocket: 'left', size: 6, hide: true, middleLabel: LeaderLine.pathLabel('Visualise Arguments')}
        );
        leaderLine.show('draw', { animOptions: { duration: 500 } });
    
        leaderLine = new LeaderLine(
            LeaderLine.pointAnchor(viewAif, {x: '100%', y: '25%'}),
            LeaderLine.pointAnchor(analytics, {x: 0, y: '50%'}),
            {dash: {animation: true}, startSocket: 'right', endSocket: 'left', size: 6, hide: true, middleLabel: LeaderLine.pathLabel('Perform Analysis')}
        );
        leaderLine.show('draw', { animOptions: { duration: 500 } });
    
        leaderLine = new LeaderLine(
            LeaderLine.pointAnchor(viewAif, {x: '100%', y: '80%'}),
            LeaderLine.pointAnchor(interrogate, {x: 0, y: '50%'}),
            {dash: {animation: true}, startSocket: 'right', endSocket: 'left', size: 6, hide: true, middleLabel: LeaderLine.pathLabel('Interrogate Hypothesis')}
        );
        leaderLine.show('draw', { animOptions: { duration: 500 } });
    
        leaderLine = new LeaderLine(
            viewAif,
            LeaderLine.pointAnchor(critique, {x: 0, y: '50%'}),
            {dash: {animation: true}, startSocket: 'bottom', endSocket: 'left', size: 6, hide: true, middleLabel: LeaderLine.pathLabel('Critique Methods')}
        );
        leaderLine.show('draw', { animOptions: { duration: 500 } });
    }, 600);
});