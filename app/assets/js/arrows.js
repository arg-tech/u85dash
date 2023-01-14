// LeaderLine elements
viewData = document.getElementById('view-data');
viewAif = document.getElementById('view-aif');
visualize = document.getElementById('visualize');
analytics = document.getElementById('analytics');
interrogate = document.getElementById('interroagte');
critique = document.getElementById('critique');


// Animation
/*
LeaderLine.mouseHoverAnchor(viewData, 'draw', {
    animOptions: {
      duration: 'ease-in-out'
    }
}),
*/

// View Data -> View AIF
new LeaderLine(
    document.getElementById('view-data'),
    LeaderLine.pointAnchor(document.getElementById('view-aif'), {x: 0, y: '50%'}),
    {dash: {animation: true}, startSocket: 'right', endSocket: 'left', size: 5}
);

// View AIF -> Visualize
new LeaderLine(
    document.getElementById('view-aif'),
    LeaderLine.pointAnchor(document.getElementById('visualize'), {x: 0, y: '50%'}),
    {dash: {animation: true}, startSocket: 'right', endSocket: 'left', size: 5}
);

// View AIF -> Analytics
new LeaderLine(
    LeaderLine.pointAnchor(document.getElementById('view-aif'), {x: '100%', y: '80%'}),
    LeaderLine.pointAnchor(document.getElementById('analytics'), {x: 0, y: '50%'}),
    {dash: {animation: true}, startSocket: 'right', endSocket: 'left', size: 5}
);

// View AIF -> Interrogate
new LeaderLine(
    LeaderLine.pointAnchor(document.getElementById('view-aif'), {x: '80%', y: '100%'}),
    LeaderLine.pointAnchor(document.getElementById('interrogate'), {x: 0, y: '50%'}),
    {dash: {animation: true}, startSocket: 'bottom', endSocket: 'left', size: 5}
);


// View AIF -> Critique
new LeaderLine(
    document.getElementById('view-aif'),
    LeaderLine.pointAnchor(document.getElementById('critique'), {x: 0, y: '50%'}),
    {dash: {animation: true}, startSocket: 'bottom', endSocket: 'left', size: 5}
);