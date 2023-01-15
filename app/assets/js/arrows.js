window.addEventListener('load', function() 
{
    // LeaderLine elements
    viewData = document.getElementById('view-data');
    viewAif = document.getElementById('view-aif');
    visualize = document.getElementById('visualize');
    analytics = document.getElementById('analytics');
    interrogate = document.getElementById('interrogate');
    critique = document.getElementById('critique');
    
    // Handle click event for view-data card
    viewDataCard = this.document.getElementById("view-data");

    viewDataCard.addEventListener('click', function() {
        if (!viewData.classList.contains('active'))
        {
            leaderLine = new LeaderLine(
                viewData,
                LeaderLine.pointAnchor(viewAif, {x: 0, y: '50%'}),
                {dash: {animation: true}, startSocket: 'right', endSocket: 'left', size: 5, animOptions: { duration: 'ease-in-out' }, hide: true, middleLabel: LeaderLine.pathLabel('Convert to AIF')}
            );
            leaderLine.show('draw', { animOptions: { duration: '1000' } });

            viewData.classList.add('active');
        }
    }, false);

    // Handle click event for view-aif card
    viewAifCard = this.document.getElementById("view-aif");

    viewAifCard.addEventListener('click', function() {
        if (!viewAif.classList.contains('active'))
        {
            leaderLine = new LeaderLine(
                viewAif,
                LeaderLine.pointAnchor(visualize, {x: 0, y: '50%'}),
                {dash: {animation: true}, startSocket: 'right', endSocket: 'left', size: 5, hide: true, middleLabel: LeaderLine.pathLabel('Visualize Arguments')}
            );
            leaderLine.show('draw', { animOptions: { duration: '1000' } });

            leaderLine = new LeaderLine(
                LeaderLine.pointAnchor(viewAif, {x: '100%', y: '80%'}),
                LeaderLine.pointAnchor(analytics, {x: 0, y: '50%'}),
                {dash: {animation: true}, startSocket: 'right', endSocket: 'left', size: 5, hide: true, middleLabel: LeaderLine.pathLabel('Perform Analysis')}
            );
            leaderLine.show('draw', { animOptions: { duration: '1000' } });

            leaderLine = new LeaderLine(
                LeaderLine.pointAnchor(viewAif, {x: '80%', y: '100%'}),
                LeaderLine.pointAnchor(interrogate, {x: 0, y: '50%'}),
                {dash: {animation: true}, startSocket: 'bottom', endSocket: 'left', size: 5, hide: true, middleLabel: LeaderLine.pathLabel('Interrogate Hypothesis')}
            );
            leaderLine.show('draw', { animOptions: { duration: '1000' } });

            leaderLine = new LeaderLine(
                viewAif,
                LeaderLine.pointAnchor(critique, {x: 0, y: '50%'}),
                {dash: {animation: true}, startSocket: 'bottom', endSocket: 'left', size: 5, hide: true, middleLabel: LeaderLine.pathLabel('Critique Methods')}
            );
            leaderLine.show('draw', { animOptions: { duration: '1000' } });


            viewAif.classList.add('active');
        }
    }, false);
});