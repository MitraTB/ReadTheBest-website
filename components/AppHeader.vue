<template>
    <div>
  <b-navbar style="width:100%" type="light" variant="warning">
    <b-navbar-brand href="#"><strong>ReadTheBest</strong></b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item href="/">Home</b-nav-item>
        <b-nav-item href="/about">About Us</b-nav-item>
        <b-nav-item href="/myBook">MyBook</b-nav-item>
        <b-nav-item-dropdown >
          <!-- Using 'button-content' slot -->
        <template #button-content> 
            Categories
        </template>
        <b-dropdown-item href="#">Sience fiction</b-dropdown-item>
        <b-dropdown-item href="#">Historical</b-dropdown-item>
        <b-dropdown-item href="#">Novel</b-dropdown-item>
        <b-dropdown-item href="#">psychological</b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>
      

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <b-nav-form>
          <b-form-input size="sm" class="mr-sm-2" placeholder="Search"></b-form-input>
          <b-button size="sm" class="my-2 my-sm-0" variant="primary" type="submit"><i class="fas fa-search">Search</i></b-button>
        </b-nav-form>

        <b-nav-item href="#">Sign In</b-nav-item>
        <b-nav-item href="#">Sign Out</b-nav-item>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</div>
</template>