<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <!-- Custom CSS -->
    <link rel="stylesheet" href="assets/css/custom.css">
    <!-- Library CSS -->
    <link rel="stylesheet" href="node_modules/bootstrap-icons/font/bootstrap-icons.css">
    <title>Document</title>
</head>
<body>
    <!-- Navbar -->
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container">
            <a class="navbar-brand" href="#">
                <img src="https://arg-tech.org/wp-content/themes/arg/images/arg-tech-w-s.png" height="34px" class="" alt="">
            </a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                <li class="nav-item active">
                    <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Features</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Pricing</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link disabled" href="#">Disabled</a>
                </li>
                </ul>
            </div>
        </div>
    </nav>

    <!-- Content -->
    <div class="container pt-5" style="height: 100vh;">
        <div class="row">
            <div class="col">
                <!-- View Data Card -->
                <div class="card bg-secondary text-white mx-auto" id="view-data" style="width: 12rem; height: 10rem;">
                    <div class="card-body">
                        <i class="bi text-dark bi-info-circle float-end" style="position: relative; left: 2.5rem; bottom: 2.5rem"></i>
                        <div class="d-flex justify-content-center" style="position: absolute; right: 0; left: 0; bottom: 0; top: 0;">
                            <h5 class="card-title primary my-auto">View Data</h5>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col">
                <!-- View AIF Card -->
                <div class="card bg-secondary text-white mx-auto" id="view-aif" style="width: 12rem; height: 10rem;">
                    <div class="card-body">
                        <i class="bi text-dark bi-info-circle float-end" style="position: relative; left: 2.5rem; bottom: 2.5rem"></i>
                        <div class="d-flex justify-content-center" style="position: absolute; right: 0; left: 0; bottom: 0; top: 0;">
                            <h5 class="card-title my-auto">View AIF</h5>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col">
                <!-- Visualize Card -->
                <div class="card bg-secondary text-white mx-auto" id="visualize" style="width: 12rem; height: 10rem;">
                    <div class="card-body">
                        <i class="bi text-dark bi-info-circle float-end" style="position: relative; left: 2.5rem; bottom: 2.5rem"></i>
                        <div class="d-flex justify-content-center" style="position: absolute; right: 0; left: 0; bottom: 0; top: 0;">
                            <h5 class="card-title my-auto">Arg-Nav</h5>
                        </div>
                    </div>
                </div>
                <!-- Analytics Card -->
                <div class="card bg-secondary text-white mx-auto mt-5" id="analytics" style="width: 12rem; height: 5rem;">
                    <div class="card-body">
                        <i class="bi text-dark bi-info-circle float-end" style="position: relative; left: 2.5rem; bottom: 2.5rem"></i>
                        <div class="d-flex justify-content-center" style="position: absolute; right: 0; left: 0; bottom: 0; top: 0;">
                            <h5 class="card-title my-auto">Analytics</h5>
                        </div>
                    </div>
                </div>
                <!-- Interrogate Card -->
                <div class="card bg-secondary text-white mx-auto mt-5" id="interrogate" style="width: 12rem; height: 10rem;">
                    <div class="card-body">
                        <i class="bi text-dark bi-info-circle float-end" style="position: relative; left: 2.5rem; bottom: 2.5rem"></i>
                        <div class="d-flex justify-content-center" style="position: absolute; right: 0; left: 0; bottom: 0; top: 0;">
                            <h5 class="card-title my-auto">Ach-Nav</h5>
                        </div>
                    </div>
                </div>
                <!-- Critique Card -->
                <div class="card bg-secondary text-white mx-auto mt-5" id="critique" style="width: 12rem; height: 10rem;">
                    <div class="card-body">
                        <i class="bi text-dark bi-info-circle float-end" style="position: relative; left: 2.5rem; bottom: 2.5rem"></i>
                        <div class="d-flex justify-content-center" style="position: absolute; right: 0; left: 0; bottom: 0; top: 0;">
                            <h5 class="card-title my-auto">Critique Player</h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div> 
    
    <!-- Libraries -->
    <script src="node_modules/bootstrap/dist/js/bootstrap.js"></script>
    <script src="node_modules/leader-line/leader-line.min.js"></script>

    <!-- Custom -->
    <script src="assets/js/arrows.js"></script>
</body>
</html>