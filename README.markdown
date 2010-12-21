Ghostwalk jQuery Plugin
=======================

Ghostwalk allows you to show content on a webpage for only a moment, like a ghost walking in a room for just a moment. It is perfect for flash messaging via AJAX, for example.

Usage
-----

    $('#element').ghostwalk();

The element will slide down, hold a certain time and then slide back up again.

You can customize the action with a JSON object as the function parameter.

    $('#element').ghostwalk({
      speed : 300
    , timeout : 3000
    });
