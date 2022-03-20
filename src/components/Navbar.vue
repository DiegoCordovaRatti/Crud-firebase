<template>
    <div class="mb-5">
        <b-navbar toggleable="lg" type="dark" variant="dark">
            <b-navbar-brand to="/">UserApp</b-navbar-brand>
    
            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
    
            <b-collapse id="nav-collapse" is-nav>
                <b-navbar-nav  class="ml-auto">
                    <b-nav-item to="/">Usuarios</b-nav-item>
                    <b-nav-item to="/about">Agregar</b-nav-item>
                </b-navbar-nav>
            </b-collapse>
        </b-navbar>
    </div>
</template>