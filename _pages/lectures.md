---
layout: default
permalink: /lectures/
title: lectures
nav: true
nav_order: 1
pagination:
  enabled: true
  collection: posts
  permalink: /page/:num/
  per_page: 5
  sort_field: date
  sort_reverse: true
  trail:
    before: 1 # The number of links before the current page
    after: 3 # The number of links after the current page
---



<div class="post">

  <div class="header-bar">
    <h1 class="smaller-h1">Schedule and Lecture Notes</h1>
    <p class="aligned-text">
      Many of the following slides are modified from the excellent class notes of similar courses offered in other schools by Prof Yung-Yu Chuang, Fredo Durand, Alyosha Efros, Bill Freeman, James Hays, Svetlana Lazebnik, Andrej Karpathy, Fei-Fei Li, Srinivasa Narasimhan, Silvio Savarese, Steve Seitz, Richard Szeliski, and Li Zhang. The instructor is extremely thankful to the researchers for making their notes available online. Please feel free to use and modify any of the slides, but acknowledge the original sources where appropriate.
    </p>
    <p class="aligned-text">
      All dates for lectures and unreleased assignments and homeworks are provisional. All readings are from Richard Szeliski, Computer Vision: Algorithms and Applications, 2nd Edition, unless otherwise noted.
    </p>
  </div>


  <!-- add lecture notes, readings, and dates -->
  <div class="post-list">
    <div class="lecture-grid">
      <!-- Jan 21 lecture -->
      <div class="lecture-item">
        <div class="lecture-date">
          <span class="date-number">21</span>
          <span class="date-month">Jan</span>
        </div>
        
        <div class="lecture-content">
          <div class="lecture-image">
            <img src="https://www.cs.cornell.edu/courses/cs5670/2024sp/lectures/images/smallfrontcover_s.jpg" alt="Introduction" class="lecture-thumbnail">
          </div>
          
          <div class="lecture-details">
            <h3>
              Introduction and Overview
              <a href="https://www.cs.cornell.edu/courses/cs5670/2024sp/lectures/lec00_intro_for_web.pdf" class="slides-link">
                <i class="fas fa-file-powerpoint"></i> Slides
              </a>
            </h3>
            
            <div class="lecture-info">
              <div class="readings">
                <h4>Readings</h4>
                <ul class="compact-list">
                  <li>Szeliski (2nd Edition) Ch. 1</li>
                </ul>
              </div>
              
              <div class="assignments">
                <h4>Assignments & Tests</h4>
                <ul class="compact-list">
                  <li>&nbsp;</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <hr class="lecture-divider">

      <!-- Jan 23 lecture -->
      <div class="lecture-item">
        <div class="lecture-date">
          <span class="date-number">23</span>
          <span class="date-month">Jan</span>
        </div>
        
        <div class="lecture-content">
          <div class="lecture-image">
            <img src="https://www.cs.cornell.edu/courses/cs5670/2024sp/lectures/images/filter.png" alt="Introduction" class="lecture-thumbnail">
          </div>
          
          <div class="lecture-details">
            <h3>
              Introduction and Overview
              <a href="https://www.cs.cornell.edu/courses/cs5670/2024sp/lectures/lec01_filter_for_web.pdf" class="slides-link">
                <i class="fas fa-file-powerpoint"></i> Slides
              </a>
            </h3>
            
            <div class="lecture-info">
              <div class="readings">
                <h4>Readings</h4>
                <ul class="compact-list">
                  <li>Szeliski 3.1-3.3</li>
                </ul>
              </div>
              
              <div class="assignments">
                <h4>Assignments & Tests</h4>
                <ul class="compact-list">
                  <li>&nbsp;</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <hr class="lecture-divider">


      <!-- Jan 28 lecture -->
      <div class="lecture-item">
        <div class="lecture-date">
          <span class="date-number">28</span>
          <span class="date-month">Jan</span>
        </div>
        
        <div class="lecture-content">
          <div class="lecture-image">
            <img src="https://www.cs.cornell.edu/courses/cs5670/2024sp/lectures/images/filter2.png" alt="Introduction" class="lecture-thumbnail">
          </div>
          
          <div class="lecture-details">
            <h3>
              Introduction and Overview
              <a href="https://www.cs.cornell.edu/courses/cs5670/2024sp/lectures/lec02_edge_for_web.pdf" class="slides-link">
                <i class="fas fa-file-powerpoint"></i> Slides
              </a>
            </h3>
            
            <div class="lecture-info">
              <div class="readings">
                <h4>Readings</h4>
                <ul class="compact-list">
                  <li>Szeliski 3.1-3.3, 7.2</li>
                </ul>
              </div>
              
              <div class="assignments">
                <h4>Assignments & Tests</h4>
                <ul class="compact-list">
                  <li>Project 1 released</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <hr class="lecture-divider">




    </div>
  </div>

  <style>
    .header-bar {
      margin-bottom: 2em;
    }
    .smaller-h1 {
      font-size: 3.5em !important; 
    }
    .aligned-text {
      text-align: left;
      font-size: 1.1em;
    }
    .post-list {
      margin-top: 2em;
    }
    .post-item {
      margin-bottom: 1.5em;
    }
    .post-meta {
      color: #aaa;
      font-size: 0.9em;
    }
    .lecture-grid {
      max-width: 1200px;
      margin: 0 auto;
    }

    .lecture-item {
      display: flex;
      gap: 2rem;
      margin-bottom: 2rem;
      background: #ffffff;
      border-radius: 8px;
      padding: 1.5rem;
      box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    }

    .lecture-date {
      min-width: 80px;
      text-align: center;
      padding: 0.5rem;
      border-right: 2px solid #eee;
    }

    .date-number {
      display: block;
      font-size: 1.8em;
      font-weight: bold;
      color: #2a2a2a;
    }

    .date-month {
      display: block;
      color: #666;
      text-transform: uppercase;
      font-size: 0.9em;
    }

    .lecture-content {
      display: flex;
      gap: 2rem;
      flex: 1;
    }

    .lecture-image {
      width: 200px;
      flex-shrink: 0;
    }

    .lecture-thumbnail {
      width: 100%;
      height: 150px;
      object-fit: cover;
      border-radius: 6px;
    }

    .lecture-details {
      flex: 1;
    }

    .lecture-details h3 {
      margin: 0 0 0.8rem 0;
      color: #2a2a2a;
      display: flex;
      align-items: center;
      gap: 1rem;
    }

    .slides-link {
      font-size: 0.5em;
      padding: 0.2rem 0.6rem;
      background: #f0f0f0;
      border-radius: 4px;
      color: #666;
      text-decoration: none;
      transition: all 0.2s ease;
    }

    .slides-link:hover {
      background: #e0e0e0;
      color: #333;
      text-decoration: none;
    }

    .lecture-info {
      display: flex;
      gap: 2.5rem;
      margin-top: 0.5rem;
    }

    .readings, .assignments {
      flex: 1;
    }

    .readings h4, .assignments h4 {
      font-size: 1em;
      color: #666;
      margin-bottom: 0.2rem;
      text-transform: uppercase;
      letter-spacing: 0.5px;
    }

    .compact-list {
      margin: 0;
      padding-left: 1.2rem;
      font-size: 0.95em;
      line-height: 1.4;
    }

    .compact-list li {
      margin-bottom: 0.2rem;
      min-height: 1.4em;
    }

    .lecture-divider {
      margin: 2rem 0;
      border: none;
      border-top: 1px solid #eee;
    }
  </style>
</div>
