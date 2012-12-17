jquery.simpleFixScroll.js
=================================================
Simple fixed scroll plugin using jQuery
=================================================

How to use
---------------------------------------------------------------------
1. Described jquery.simapleTicker.css and jquery.simpleTicker.css as follows :

    <link href="/jquery.simpleFixedScroll.js/jquery.simpleFixedScroll/jquery.simpleFixedScroll.css" rel="stylesheet">
    <script src="//ajax.googleapis.com/ajax/libs/jquery/1.8.3/jquery.min.js"></script>
    <script src="/jquery.simpleFixedScroll.js/jquery.simpleFixedScroll/jquery.simpleFixedScroll.js"></script>


2. Described target list.

    <div id="main">
    <div id="contents"></div><!-- /#contents -->
    <div id="local-nav"></div><!-- /#local-nav- -->
    </div><!-- /#main- -->

3. Described javascript code as follows

    <script>
    $(function(){
      $.simpleFixedScroll($("#local-nav"));
    });
    </script>
    </pre>    


Related information
----------------------------------------------------------------------


License
----------------------------------------------------------------------
Copyright (c) 2012 miraoto
Dual licensed under the [MIT license][MIT] and [GPL license][GPL].
[MIT]: http://www.opensource.org/licenses/mit-license.php
[GPL]: http://www.gnu.org/licenses/gpl.html

