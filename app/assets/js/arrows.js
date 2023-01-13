// Add new leader line from `start` to `end` (HTML/SVG element, basically).
new LeaderLine(
    document.getElementById('view-data'),
    LeaderLine.pointAnchor(document.getElementById('view-aif'), {x: '100%', y: '50%'}),
    {dash: {animation: true}}
);

new LeaderLine(
    LeaderLine.pointAnchor(document.getElementById('view-aif'), {x: '100%', y: '50%'}),
    LeaderLine.pointAnchor(document.getElementById('visualize'), {x: 0, y: 0}),
    {dash: {animation: true}}
);

new LeaderLine(
    document.getElementById('view-aif'),
    LeaderLine.pointAnchor(document.getElementById('interrogate')),
    {dash: {animation: true}}
);

new LeaderLine(
    document.getElementById('view-aif'),
    LeaderLine.pointAnchor(document.getElementById('critique')),
    {dash: {animation: true}}
);