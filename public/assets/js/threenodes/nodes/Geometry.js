var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; }, __hasProp = Object.prototype.hasOwnProperty, __extends = function(child, parent) {
  for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; }
  function ctor() { this.constructor = child; }
  ctor.prototype = parent.prototype;
  child.prototype = new ctor;
  child.__super__ = parent.prototype;
  return child;
};
define(['jQuery', 'Underscore', 'Backbone', "text!templates/node.tmpl.html", "order!libs/jquery.tmpl.min", "order!libs/jquery.contextMenu", 'order!threenodes/core/NodeFieldRack', 'order!threenodes/utils/Utils'], function($, _, Backbone, _view_node_template) {
  "use strict";  ThreeNodes.nodes.types.Geometry.PlaneGeometry = (function() {
    __extends(PlaneGeometry, ThreeNodes.NodeBase);
    function PlaneGeometry() {
      this.compute = __bind(this.compute, this);
      this.get_cache_array = __bind(this.get_cache_array, this);
      this.set_fields = __bind(this.set_fields, this);
      PlaneGeometry.__super__.constructor.apply(this, arguments);
    }
    PlaneGeometry.prototype.set_fields = function() {
      PlaneGeometry.__super__.set_fields.apply(this, arguments);
      this.auto_evaluate = true;
      this.ob = new THREE.PlaneGeometry(100, 100, 1, 1, 1);
      this.rack.addFields({
        inputs: {
          "width": 100,
          "height": 100,
          "segments_width": 1,
          "segments_height": 1
        },
        outputs: {
          "out": {
            type: "Any",
            val: this.ob
          }
        }
      });
      return this.cached = this.get_cache_array();
    };
    PlaneGeometry.prototype.get_cache_array = function() {
      return [this.rack.get("width").get(), this.rack.get("height").get(), this.rack.get("segments_width").get(), this.rack.get("segments_height").get()];
    };
    PlaneGeometry.prototype.compute = function() {
      var new_cache;
      new_cache = this.get_cache_array();
      if (ThreeNodes.Utils.flatArraysAreEquals(new_cache, this.cached) === false) {
        this.ob = new THREE.PlaneGeometry(this.rack.get("width").get(), this.rack.get("height").get(), this.rack.get("segments_width").get(), this.rack.get("segments_height").get());
      }
      this.apply_fields_to_val(this.rack.node_fields.inputs, this.ob);
      return this.rack.set("out", this.ob);
    };
    return PlaneGeometry;
  })();
  ThreeNodes.nodes.types.Geometry.CubeGeometry = (function() {
    __extends(CubeGeometry, ThreeNodes.NodeBase);
    function CubeGeometry() {
      this.compute = __bind(this.compute, this);
      this.get_cache_array = __bind(this.get_cache_array, this);
      this.set_fields = __bind(this.set_fields, this);
      CubeGeometry.__super__.constructor.apply(this, arguments);
    }
    CubeGeometry.prototype.set_fields = function() {
      CubeGeometry.__super__.set_fields.apply(this, arguments);
      this.auto_evaluate = true;
      this.ob = new THREE.CubeGeometry(100, 100, 100, 1, 1, 1);
      this.rack.addFields({
        inputs: {
          "flip": -1,
          "width": 100,
          "height": 100,
          "depth": 100,
          "segments_width": 1,
          "segments_height": 1,
          "segments_depth": 1
        },
        outputs: {
          "out": {
            type: "Any",
            val: this.ob
          }
        }
      });
      return this.cached = this.get_cache_array();
    };
    CubeGeometry.prototype.get_cache_array = function() {
      return [this.rack.get("width").get(), this.rack.get("height").get(), this.rack.get("depth").get(), this.rack.get("segments_width").get(), this.rack.get("segments_height").get(), this.rack.get("segments_depth").get(), this.rack.get("flip").get()];
    };
    CubeGeometry.prototype.compute = function() {
      var new_cache;
      new_cache = this.get_cache_array();
      if (ThreeNodes.Utils.flatArraysAreEquals(new_cache, this.cached) === false) {
        this.ob = new THREE.CubeGeometry(this.rack.get("width").get(), this.rack.get("height").get(), this.rack.get("depth").get(), this.rack.get("segments_width").get(), this.rack.get("segments_height").get(), this.rack.get("segments_depth").get(), this.rack.get("flip").get());
      }
      this.apply_fields_to_val(this.rack.node_fields.inputs, this.ob);
      return this.rack.set("out", this.ob);
    };
    return CubeGeometry;
  })();
  ThreeNodes.nodes.types.Geometry.SphereGeometry = (function() {
    __extends(SphereGeometry, ThreeNodes.NodeBase);
    function SphereGeometry() {
      this.compute = __bind(this.compute, this);
      this.get_cache_array = __bind(this.get_cache_array, this);
      this.set_fields = __bind(this.set_fields, this);
      SphereGeometry.__super__.constructor.apply(this, arguments);
    }
    SphereGeometry.prototype.set_fields = function() {
      SphereGeometry.__super__.set_fields.apply(this, arguments);
      this.auto_evaluate = true;
      this.ob = new THREE.SphereGeometry(100, 20, 20);
      this.rack.addFields({
        inputs: {
          "radius": 100,
          "segments_width": 1,
          "segments_height": 1
        },
        outputs: {
          "out": {
            type: "Any",
            val: this.ob
          }
        }
      });
      return this.cached = this.get_cache_array();
    };
    SphereGeometry.prototype.get_cache_array = function() {
      return [this.rack.get("radius").get(), this.rack.get("segments_width").get(), this.rack.get("segments_height").get()];
    };
    SphereGeometry.prototype.compute = function() {
      var new_cache;
      new_cache = this.get_cache_array();
      if (ThreeNodes.Utils.flatArraysAreEquals(new_cache, this.cached) === false) {
        this.ob = new THREE.SphereGeometry(this.rack.get("radius").get(), this.rack.get("segments_width").get(), this.rack.get("segments_height").get());
        this.cached = new_cache;
      }
      this.apply_fields_to_val(this.rack.node_fields.inputs, this.ob);
      return this.rack.set("out", this.ob);
    };
    return SphereGeometry;
  })();
  ThreeNodes.nodes.types.Geometry.CylinderGeometry = (function() {
    __extends(CylinderGeometry, ThreeNodes.NodeBase);
    function CylinderGeometry() {
      this.compute = __bind(this.compute, this);
      this.get_cache_array = __bind(this.get_cache_array, this);
      this.set_fields = __bind(this.set_fields, this);
      CylinderGeometry.__super__.constructor.apply(this, arguments);
    }
    CylinderGeometry.prototype.set_fields = function() {
      CylinderGeometry.__super__.set_fields.apply(this, arguments);
      this.auto_evaluate = true;
      this.ob = new THREE.CylinderGeometry(100, 100, 20, 30, 1, false);
      this.rack.addFields({
        inputs: {
          "radiusTop": 100,
          "radiusBottom": 100,
          "height": 20,
          "segmentsRadius": 30,
          "segmentsHeight": 1,
          "openEnded": false
        },
        outputs: {
          "out": {
            type: "Any",
            val: this.ob
          }
        }
      });
      return this.cached = this.get_cache_array();
    };
    CylinderGeometry.prototype.get_cache_array = function() {
      return [this.rack.get("radiusTop").get(), this.rack.get("radiusBottom").get(), this.rack.get("height").get(), this.rack.get("segmentsRadius").get(), this.rack.get("segmentsHeight").get(), this.rack.get("openEnded").get()];
    };
    CylinderGeometry.prototype.compute = function() {
      var new_cache;
      new_cache = this.get_cache_array();
      if (ThreeNodes.Utils.flatArraysAreEquals(new_cache, this.cached) === false) {
        this.ob = new THREE.CylinderGeometry(this.rack.get("radiusTop").get(), this.rack.get("radiusBottom").get(), this.rack.get("height").get(), this.rack.get("segmentsRadius").get(), this.rack.get("segmentsHeight").get(), this.rack.get("openEnded").get());
        this.cached = new_cache;
      }
      this.apply_fields_to_val(this.rack.node_fields.inputs, this.ob);
      return this.rack.set("out", this.ob);
    };
    return CylinderGeometry;
  })();
  ThreeNodes.nodes.types.Geometry.TorusGeometry = (function() {
    __extends(TorusGeometry, ThreeNodes.NodeBase);
    function TorusGeometry() {
      this.compute = __bind(this.compute, this);
      this.get_cache_array = __bind(this.get_cache_array, this);
      this.set_fields = __bind(this.set_fields, this);
      TorusGeometry.__super__.constructor.apply(this, arguments);
    }
    TorusGeometry.prototype.set_fields = function() {
      TorusGeometry.__super__.set_fields.apply(this, arguments);
      this.auto_evaluate = true;
      this.ob = new THREE.TorusGeometry(100, 40, 8, 6, Math.PI * 2);
      this.rack.addFields({
        inputs: {
          "radius": 100,
          "tube": 40,
          "segmentsR": 8,
          "segmentsT": 6,
          "arc": Math.PI * 2
        },
        outputs: {
          "out": {
            type: "Any",
            val: this.ob
          }
        }
      });
      return this.cached = this.get_cache_array();
    };
    TorusGeometry.prototype.get_cache_array = function() {
      return [this.rack.get("radius").get(), this.rack.get("tube").get(), this.rack.get("segmentsR").get(), this.rack.get("segmentsT").get(), this.rack.get("arc").get()];
    };
    TorusGeometry.prototype.compute = function() {
      var new_cache;
      new_cache = this.get_cache_array();
      if (ThreeNodes.Utils.flatArraysAreEquals(new_cache, this.cached) === false) {
        this.ob = new THREE.TorusGeometry(this.rack.get("radius").get(), this.rack.get("tube").get(), this.rack.get("segmentsR").get(), this.rack.get("segmentsT").get(), this.rack.get("arc").get());
        this.cached = new_cache;
      }
      this.apply_fields_to_val(this.rack.node_fields.inputs, this.ob);
      return this.rack.set("out", this.ob);
    };
    return TorusGeometry;
  })();
  ThreeNodes.nodes.types.Geometry.TorusKnotGeometry = (function() {
    __extends(TorusKnotGeometry, ThreeNodes.NodeBase);
    function TorusKnotGeometry() {
      this.compute = __bind(this.compute, this);
      this.get_cache_array = __bind(this.get_cache_array, this);
      this.set_fields = __bind(this.set_fields, this);
      TorusKnotGeometry.__super__.constructor.apply(this, arguments);
    }
    TorusKnotGeometry.prototype.set_fields = function() {
      TorusKnotGeometry.__super__.set_fields.apply(this, arguments);
      this.auto_evaluate = true;
      this.ob = new THREE.TorusKnotGeometry(200, 40, 64, 8, 2, 3, 1);
      this.rack.addFields({
        inputs: {
          "radius": 200,
          "tube": 40,
          "segmentsR": 64,
          "segmentsT": 8,
          "p": 2,
          "q": 3,
          "heightScale": 1
        },
        outputs: {
          "out": {
            type: "Any",
            val: this.ob
          }
        }
      });
      return this.cached = this.get_cache_array();
    };
    TorusKnotGeometry.prototype.get_cache_array = function() {
      return [this.rack.get("radius").get(), this.rack.get("tube").get(), this.rack.get("segmentsR").get(), this.rack.get("segmentsT").get(), this.rack.get("p").get(), this.rack.get("q").get(), this.rack.get("heightScale").get()];
    };
    TorusKnotGeometry.prototype.compute = function() {
      var new_cache;
      new_cache = this.get_cache_array();
      if (ThreeNodes.Utils.flatArraysAreEquals(new_cache, this.cached) === false) {
        this.ob = new THREE.TorusKnotGeometry(this.rack.get("radius").get(), this.rack.get("tube").get(), this.rack.get("segmentsR").get(), this.rack.get("segmentsT").get(), this.rack.get("p").get(), this.rack.get("q").get(), this.rack.get("heightScale").get());
        this.cached = new_cache;
      }
      this.apply_fields_to_val(this.rack.node_fields.inputs, this.ob);
      return this.rack.set("out", this.ob);
    };
    return TorusKnotGeometry;
  })();
  ThreeNodes.nodes.types.Geometry.OctahedronGeometry = (function() {
    __extends(OctahedronGeometry, ThreeNodes.NodeBase);
    function OctahedronGeometry() {
      this.compute = __bind(this.compute, this);
      this.get_cache_array = __bind(this.get_cache_array, this);
      this.set_fields = __bind(this.set_fields, this);
      OctahedronGeometry.__super__.constructor.apply(this, arguments);
    }
    OctahedronGeometry.prototype.set_fields = function() {
      OctahedronGeometry.__super__.set_fields.apply(this, arguments);
      this.auto_evaluate = true;
      this.ob = new THREE.OctahedronGeometry(100, 0);
      this.rack.addFields({
        inputs: {
          "radius": 100,
          "detail": 0
        },
        outputs: {
          "out": {
            type: "Any",
            val: this.ob
          }
        }
      });
      return this.cached = this.get_cache_array();
    };
    OctahedronGeometry.prototype.get_cache_array = function() {
      return [this.rack.get("radius").get(), this.rack.get("detail").get()];
    };
    OctahedronGeometry.prototype.compute = function() {
      var new_cache;
      new_cache = this.get_cache_array();
      if (ThreeNodes.Utils.flatArraysAreEquals(new_cache, this.cached) === false) {
        this.ob = new THREE.OctahedronGeometry(this.rack.get("radius").get(), this.rack.get("detail").get());
        this.cached = new_cache;
      }
      this.apply_fields_to_val(this.rack.node_fields.inputs, this.ob);
      return this.rack.set("out", this.ob);
    };
    return OctahedronGeometry;
  })();
  return ThreeNodes.nodes.types.Geometry.TextGeometry = (function() {
    __extends(TextGeometry, ThreeNodes.NodeBase);
    function TextGeometry() {
      this.compute = __bind(this.compute, this);
      this.get_cache_array = __bind(this.get_cache_array, this);
      this.set_fields = __bind(this.set_fields, this);
      TextGeometry.__super__.constructor.apply(this, arguments);
    }
    TextGeometry.prototype.set_fields = function() {
      TextGeometry.__super__.set_fields.apply(this, arguments);
      this.ob = false;
      this.rack.addFields({
        inputs: {
          "text": "Example",
          "font": {
            type: "Any",
            val: {}
          },
          "size": 100,
          "height": 20,
          "curveSegments": 4,
          "bevelEnabled": false,
          "bevelThickness": 0,
          "bevelSize": 0
        },
        outputs: {
          "out": {
            type: "Any",
            val: this.ob
          }
        }
      });
      return this.cached = this.get_cache_array();
    };
    TextGeometry.prototype.get_cache_array = function() {
      return [this.rack.get("font").get(), this.rack.get("text").get(), this.rack.get("size").get(), this.rack.get("height").get(), this.rack.get("curveSegments").get(), this.rack.get("bevelEnabled").get(), this.rack.get("bevelThickness").get(), this.rack.get("bevelSize").get()];
    };
    TextGeometry.prototype.compute = function() {
      var font, has_font_attribute, new_cache;
      new_cache = this.get_cache_array();
      font = this.rack.get("font").get();
      has_font_attribute = function(f) {
        if (font["font"] && font["weight"]) {
          return true;
        }
        return false;
      };
      if (!has_font_attribute(font) ||  this.rack.get("text").get() === "") {
        this.ob = false;
        this.rack.set("out", this.ob);
        return false;
      }
      if (ThreeNodes.Utils.flatArraysAreEquals(new_cache, this.cached) === false) {
        console.log("building text " + font.font + " / " + font.weight);
        this.ob = new THREE.TextGeometry(this.rack.get("text").get(), {
          size: this.rack.get("size").get(),
          height: this.rack.get("height").get(),
          font: font.font,
          weight: font.weight,
          curveSegments: this.rack.get("curveSegments").get()
        });
        this.ob.computeBoundingBox();
        this.ob.computeVertexNormals();
        this.cached = new_cache;
      }
      return this.rack.set("out", this.ob);
    };
    return TextGeometry;
  })();
});