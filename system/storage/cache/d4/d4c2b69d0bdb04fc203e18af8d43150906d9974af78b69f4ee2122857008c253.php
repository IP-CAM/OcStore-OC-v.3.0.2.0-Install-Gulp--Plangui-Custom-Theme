<?php

/* default/template/extension/module/blog_latest.twig */
class __TwigTemplate_92346d4a10d939abc8664bfbf8934b2d4abf26265074868be34a903ce2e9979f extends Twig_Template
{
    public function __construct(Twig_Environment $env)
    {
        parent::__construct($env);

        $this->parent = false;

        $this->blocks = array(
        );
    }

    protected function doDisplay(array $context, array $blocks = array())
    {
        // line 1
        echo "<h3>";
        echo (isset($context["heading_title"]) ? $context["heading_title"] : null);
        echo "</h3>
<div class=\"row\">
 ";
        // line 3
        $context['_parent'] = $context;
        $context['_seq'] = twig_ensure_traversable((isset($context["articles"]) ? $context["articles"] : null));
        foreach ($context['_seq'] as $context["_key"] => $context["article"]) {
            // line 4
            echo "  <div class=\"product-layout col-lg-3 col-md-3 col-sm-6 col-xs-12\">
    <div class=\"product-thumb transition\">
      <div class=\"image\"><a href=\"";
            // line 6
            echo $this->getAttribute($context["article"], "href", array());
            echo "\"><img src=\"";
            echo $this->getAttribute($context["article"], "thumb", array());
            echo "\" alt=\"";
            echo $this->getAttribute($context["article"], "name", array());
            echo "\" title=\"";
            echo $this->getAttribute($context["article"], "name", array());
            echo "\" class=\"img-responsive\" /></a></div>
      <div class=\"caption\">
        <h4><a href=\"";
            // line 8
            echo $this->getAttribute($context["article"], "href", array());
            echo "\">";
            echo $this->getAttribute($context["article"], "name", array());
            echo "</a></h4>
        <p>";
            // line 9
            echo $this->getAttribute($context["article"], "description", array());
            echo "</p>
        ";
            // line 10
            if ($this->getAttribute($context["article"], "rating", array())) {
                // line 11
                echo "        <div class=\"rating\">
          ";
                // line 12
                $context['_parent'] = $context;
                $context['_seq'] = twig_ensure_traversable(5);
                foreach ($context['_seq'] as $context["_key"] => $context["i"]) {
                    // line 13
                    echo "          ";
                    if (($this->getAttribute($context["article"], "rating", array()) < $context["i"])) {
                        // line 14
                        echo "          <span class=\"fa fa-stack\"><i class=\"fa fa-star-o fa-stack-2x\"></i></span>
          ";
                    } else {
                        // line 16
                        echo "          <span class=\"fa fa-stack\"><i class=\"fa fa-star fa-stack-2x\"></i><i class=\"fa fa-star-o fa-stack-2x\"></i></span>
          ";
                    }
                    // line 18
                    echo "          ";
                }
                $_parent = $context['_parent'];
                unset($context['_seq'], $context['_iterated'], $context['_key'], $context['i'], $context['_parent'], $context['loop']);
                $context = array_intersect_key($context, $_parent) + $_parent;
                // line 19
                echo "        </div>
        ";
            }
            // line 21
            echo "      </div>
\t  <div class=\"button-group\">
        <button type=\"button\" onclick=\"location.href = ('";
            // line 23
            echo $this->getAttribute($context["article"], "href", array());
            echo "');\"><i class=\"fa fa-share\"></i> <span class=\"hidden-xs hidden-sm hidden-md\">";
            echo (isset($context["button_more"]) ? $context["button_more"] : null);
            echo "</span></button>
        <button type=\"button\" data-toggle=\"tooltip\" title=\"";
            // line 24
            echo $this->getAttribute($context["article"], "date_added", array());
            echo "\" \"><i class=\"fa fa-clock-o\"></i></button>
        <button type=\"button\" data-toggle=\"tooltip\" title=\"";
            // line 25
            echo (isset($context["text_views"]) ? $context["text_views"] : null);
            echo " ";
            echo $this->getAttribute($context["article"], "viewed", array());
            echo "\" \"><i class=\"fa fa-eye\"></i></button>
     </div>
    </div>
  </div>
  ";
        }
        $_parent = $context['_parent'];
        unset($context['_seq'], $context['_iterated'], $context['_key'], $context['article'], $context['_parent'], $context['loop']);
        $context = array_intersect_key($context, $_parent) + $_parent;
        // line 30
        echo "</div>
";
    }

    public function getTemplateName()
    {
        return "default/template/extension/module/blog_latest.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  111 => 30,  98 => 25,  94 => 24,  88 => 23,  84 => 21,  80 => 19,  74 => 18,  70 => 16,  66 => 14,  63 => 13,  59 => 12,  56 => 11,  54 => 10,  50 => 9,  44 => 8,  33 => 6,  29 => 4,  25 => 3,  19 => 1,);
    }
}
/* <h3>{{ heading_title }}</h3>*/
/* <div class="row">*/
/*  {% for article in articles %}*/
/*   <div class="product-layout col-lg-3 col-md-3 col-sm-6 col-xs-12">*/
/*     <div class="product-thumb transition">*/
/*       <div class="image"><a href="{{ article.href }}"><img src="{{ article.thumb }}" alt="{{ article.name }}" title="{{ article.name }}" class="img-responsive" /></a></div>*/
/*       <div class="caption">*/
/*         <h4><a href="{{ article.href }}">{{ article.name }}</a></h4>*/
/*         <p>{{ article.description }}</p>*/
/*         {% if article.rating %}*/
/*         <div class="rating">*/
/*           {% for i in 5 %}*/
/*           {% if article.rating < i %}*/
/*           <span class="fa fa-stack"><i class="fa fa-star-o fa-stack-2x"></i></span>*/
/*           {% else %}*/
/*           <span class="fa fa-stack"><i class="fa fa-star fa-stack-2x"></i><i class="fa fa-star-o fa-stack-2x"></i></span>*/
/*           {% endif %}*/
/*           {% endfor %}*/
/*         </div>*/
/*         {% endif %}*/
/*       </div>*/
/* 	  <div class="button-group">*/
/*         <button type="button" onclick="location.href = ('{{ article.href }}');"><i class="fa fa-share"></i> <span class="hidden-xs hidden-sm hidden-md">{{ button_more }}</span></button>*/
/*         <button type="button" data-toggle="tooltip" title="{{ article.date_added }}" "><i class="fa fa-clock-o"></i></button>*/
/*         <button type="button" data-toggle="tooltip" title="{{ text_views }} {{ article.viewed }}" "><i class="fa fa-eye"></i></button>*/
/*      </div>*/
/*     </div>*/
/*   </div>*/
/*   {% endfor %}*/
/* </div>*/
/* */
