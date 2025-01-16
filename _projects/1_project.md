---
layout: page
title: "project 1: hybrid images"
description: coming soon
img: https://www.cs.cornell.edu/courses/cs5670/2019sp/projects/pa1/hybrid_image.jpg
importance: 1
category: work
related_publications: true
---


<!doctype html>
<html lang="en">

<head>
  <title>Project 1: Hybrid Images</title>
  <link href='http://fonts.googleapis.com/css?family=Lato&subset=latin,latin-ext'
    rel='stylesheet' type='text/css'>
  <link href="style.css" rel="stylesheet" type="text/css">
</head>

<body>
  <main>
    <header>
      <h1>Project 1: Hybrid Images</h1>
      <figure>
        <img src="hybrid_image.jpg"></img>
        <figcaption>
         Look at the image from very close and then very far (or if you can't move far away, just zoom out the page to shrink it and squint). What do you see?
        </figcaption>
      </figure>
    </header>

    <section id="keyInformation">
      <h2>Key Information</h2>
      <table>
        <tr>
          <td><strong>Assigned</strong></td>
          <td>Tuesday, Jan 29, 2019 (Code accessible from <a href="https://github.com/cornelltechcs5670/Cornell-CS5670-2019">course GitHub repo</a>)</td>
        </tr>
        <tr class="importantInfo">
          <td><strong>Due</strong></td>
          <td>Monday, Feb 11 on CMS by 11:59pm</td>
        </tr>
        <tr>
          <td><strong>Code Files to Submit</strong></td>
          <td><code>hybrid.py</code></td>
        </tr>
        <tr class="importantInfo">
          <td><strong>Artifact Due</strong></td>
          <td>Wednesday, Feb 13 on CMS by 11:59pm</td>
        </tr>
        <tr>
          <td><strong>Artifact Files to Submit</strong></td>
          <td><code>README, left.png, right.png, hybrid.png</code></td>
        </li>
      </table>

      <br>

      This project <strong>must be done individually (groups of one).</strong>
    </section>

    </section id="overview">
      <h2>Overview</h2>

      <p>
        The goal of this assignment is to write an image filtering function
        and use it to create <a href="http://cvcl.mit.edu/hybrid_gallery/gallery.html">
        hybrid images</a> using a simplified version of the SIGGRAPH 2006
        <a href="http://cvcl.mit.edu/publications/OlivaTorralb_Hybrid_Siggraph06.pdf">
        paper</a> by Oliva, Torralba, and Schyns. <strong>Hybrid images</strong> are
        static images that change in interpretation as a function of the viewing
        distance. The basic idea is that high frequency tends to dominate
        perception when it is available, but, at a distance, only the low
        frequency (smooth) part of the signal can be seen. By blending the high
        frequency portion of one image with the low-frequency portion of
        another, you get a hybrid image that leads to different interpretations
        at different distances.
      </p>

      <p>You will use your <strong>own</strong> solution to create your
        <strong>own</strong> hybrid images, and the class will vote on the best
        hybrid image created.
      </p>

      <p>
        In the <a href="#downloads">Downloads</a> section below, we provide you
        with a tutorial on how to set up a python environment called <font color="red">cs5670_python_env</font> for you to run this project. We've set up this environment on the lab machines in the master studio. Apart from that, there is skeleton code for
        a user interface provided on <a href="https://github.com/cornelltechcs5670/Cornell-CS5670-2019/tree/master/Project1_Hybrid_Images">
        github</a> along with a file <code>hybrid.py</code> that contains functions
        that you need to implement. We will walk you through the functions in the
        next section. If you have issues running the VM or the user interface,
        please post a question on Piazza, or visit a TA during his or her office
        hours.
      </p>
    </section>

    <section id="details">
      <h2>Implementation Details</h2>

      <p>
        This project is intended to familiarize you with Python, NumPy and image
        filtering. Once you have created an image filtering function, it is
        relatively straightforward to construct hybrid images.
      </p>

      <p>
        This project requires you to implement 5 functions each of which builds
        onto a previous function:
      </p>

      <ol>
        <li><code>cross_correlation_2d</code></li>
        <li><code>convolve_2d</code></li>
        <li><code>gaussian_blur_kernel_2d</code></li>
        <li><code>low_pass</code></li>
        <li><code>high_pass</code></li>
      </ol>

      <p>
        <strong>Image Filtering.</strong> Image filtering (or convolution) is a
        fundamental image processing tool. See chapter 3.2 of Szeliski and the
        lecture materials to learn about image filtering (specifically linear
        filtering). Numpy has numerous built in and efficient functions to
        perform image filtering, but you will be writing your own such function
        from scratch for this assignment. More specifically, you will implement
        <code>cross_correlation_2d</code>, followed by <code>convolve_2d</code>
        which would use <code>cross_correlation_2d</code>.
      </p>

      <p>
        <strong>Gaussian Blur.</strong> As you have seen in the lectures,
        there are a few different way to blur an image, for example taking an
        unweighted average of the neighboring pixels. Gaussian blur is a special
        kind of <em>weighted</em> averaging of neighboring pixels, and is
        described in the lecture slides. To implement Gaussian blur, you will
        implement a function <code>gaussian_blur_kernel_2d</code> that produces
        a kernel of a given <em>height</em> and <em>width</em> which can then be
        passed to <code>convolve_2d</code> from above, along with an image, to
        produce a blurred version of the image.
      </p>

      <p>
        <strong>High and Low Pass Filters.</strong> Recall that a low pass filter
        is one that removes the fine details from an image (or, really, any
        <em>signal</em>), whereas a high pass filter only retails the fine
        details, and gets rid of the coarse details from an image. Thus, using
        <strong> Gaussian blurring </strong> as described above, implement
        <code>high_pass</code> and <code>low_pass</code> functions.
      </p>

      <p>
        <strong>Hybrid Images.</strong> A hybrid image is the sum of a low-pass
        filtered version of the one image and a high-pass filtered version of a
        second image. There is a free parameter, which can be tuned for each
        image pair, which controls <em>how much</em> high frequency to remove
        from the first image and how much low frequency to leave in the second
        image. This is called the "cutoff-frequency". In the paper it is
        suggested to use two cutoff frequencies (one tuned for each image)
        and you are free to try that, as well. In the starter code, the cutoff
        frequency is controlled by changing the standard deviation (sigma) of
        the Gausian filter used in constructing the hybrid images. We provide
        you with the code for creating a hybrid image, using the functions
        described above.
      </p>

      <p>
        <strong class="importantInfo">Forbidden functions.</strong>
        For just this assignment, you are
        forbidden from using any Numpy, Scipy, OpenCV, or other preimplemented
        functions for filtering. This limitation will be lifted in future
        assignments, but for now, you should use for loops or Numpy vectorization
        to apply a kernel to each pixel in the image. The bulk of your code will
        be in <code>cross_correlation_2d</code>, and
        <code>gaussian_blur_kernel_2d</code> with the other functions using these
        functions either directly or through one of the other functions you
        implement.
      </p>

      <p>
        We have provided a GUI in <code>gui.py</code>, to help you debug your
        image filtering algorithm. To see a pre-labeled version of the sample
        images run:
      </p>

      <center><code>python gui.py -t resources/sample-correspondance.json -c resources/sample-config.json</code></center><br>

      <p>
        We provide you with a pair of images that need to be <strong>aligned
        </strong> using the GUI. The code for alignment uses an affine transform
        to map the eyes to eyes and nose to nose, etc. as you specify on the GUI.
        We encourage you to create additional examples (e.g. change
        of expression, morph between different objects, change over time, etc.).
        See the <a href="http://cvcl.mit.edu/hybrid_gallery/gallery.html">
        hybrid images project page</a> for some inspiration. The project page
        also contains materials from their
        <a href="http://cvcl.mit.edu/publications/publications.html">
        Siggraph presentation</a>.
      </p>

      <p>
        For the example shown at the top of the page, the two original images
        look like this:
      </p>

      <img src="dog.jpg" width="395">
      <img src="cat.jpg" width="395">

      <p>
      The low-pass (blurred) and high-pass versions of these images look like below:
      </p>

      <img src="low_frequencies.jpg" width="395">
      <img src="high_frequencies.jpg" width="395">

      <p>
        Adding the high and low frequencies together gives you the image at the
        top of this page. If you're having trouble seeing the multiple
        interpretations of the image, a useful way to visualize the effect is to
        progressively downsample the hybrid image as is done below:
      </p>

      <img src="cat_hybrid_image_scales.jpg" width="800">

    </section>

    <section id="Submission">
      <h2> Submission </h2>
      <ul>
      <li><strong>hybrid.py</strong>: Submit with all five functions implemented</li>
      <li><strong>left.png, right.png</strong>: Submit the left and right images you used to create hybrid image. </li>
      <li><strong>hybrid.png</strong>: Submit the hybrid image produced by using your implementation and left,right images</li>
      <li><strong>README</strong>
        <ul>
          <li>Must contain high pass and low pass filter parameters(kernel size and kernel sigma) and Mix-in ratio.</li>
          <li>It should also contain which image's higher/lower frequencies are used.</li>
          <li><strong>Optionally</strong> you can add comments on something interesting or different you did in the project.</li>
        </ul>
      </li>
      </ul>
    </section>

    <section id="downloads">
      <h2> Downloads </h2>
      <ul>
<!--         <li>Course <a
              href="https://www.dropbox.com/sh/c2runrwiegbtpsp/AAAdUvkgUFtTz98W_Okd_56ra?dl=0">
            Virtual Machine (VM)</a>(<a href="../CS5670.ova">another link</a>)</li>  <strong class="importantInfo">VM Password: ubuntu</strong> -->
<!--         <li>Course <a
              href="https://drive.google.com/open?id=16OYbcYNDL-T6RJbjU6ZXsv8zh5CxRUrD">
            Virtual Machine (VM)</a>(<a href="../CS5670.ova">another link</a>)</li>  <strong class="importantInfo">VM Password: ubuntu</strong> -->
        <li><a href="../cs5670_python_env/index.html">Tutorial on how to set up cs5670_python_env</a></li>
<!--         <li><a href="https://www.virtualbox.org/">Virtualbox</a> for running
          the VM</li> -->
         <li>As an alternative to cs5670_python_env, we also provide a  <a
              href="https://drive.google.com/file/d/16OYbcYNDL-T6RJbjU6ZXsv8zh5CxRUrD/view?usp=sharing">
            ubuntu Virtual Machine (VM)</a> for you to use. Inside this VM, all dependent packages have been installed for you. Use <a href="https://www.virtualbox.org/">VirtualBox</a> to run it. (<strong class="importantInfo">VM Password: ubuntu</strong>)
<!--         <li>Course <a
              href="https://drive.google.com/open?id=16OYbcYNDL-T6RJbjU6ZXsv8zh5CxRUrD">
            Virtual Machine (VM)</a>(<a href="../CS5670.ova">another link</a>)</li>  <strong class="importantInfo">VM Password: ubuntu</strong> -->
        <li>Skeleton code is on <a href="https://github.com/cornelltechcs5670/Cornell-CS5670-2019">github</a></li>
        <!-- <li><a href="#">Video tutorial</a> on using the VM</li> -->
        <!-- <li><a href="#">Video tutorial</a> on using the project user interface</li> -->
      </ul>
    </section>

    <section>
        <h2> Python and Numpy Tutorials</h2>
        <p>
          We will use python programming language for all assignments in this course. In particular, we will use Numpy for scientific computing. If you are not farmilar with python and numpy, the following websites provide very good tutorials for them. If you have any questions related to python and numpy, please go to TA office hours or post questions on Piazza. 
          <ul>
            <li><a href="http://www.cs.cornell.edu/courses/cs4670/2016sp/lectures/lec06_numpy.pdf">Numpy primer</a></li>
            <li><a href="http://cs231n.github.io/python-numpy-tutorial/">Python Numpy Tutorial from Stanford CS231n</a></li>
            <li><a href="https://docs.scipy.org/doc/numpy-1.15.0/user/quickstart.html"> Official Numpy Quick Tutorial</a></li>
            <li><a href="https://docs.scipy.org/doc/numpy-1.15.0/user/numpy-for-matlab-users.html">Numpy for Matlab users</a></li>
            <li><a href="https://www.tutorialspoint.com/python/">Short Python Tutorial</a></li>
          </ul>
        </p>

    </section>
    <section>

      <h2>Acknowledgements</h2>
      <p>
        Assignment based on versions developed by James Hays and Derek Hoiem.
      </p>
    </section>

  </main>
</body>
</html>
