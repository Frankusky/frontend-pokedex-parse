/*describe('PasswordController', function() {
  beforeEach(module('app'));

  var $controller;

  beforeEach(inject(function(_$controller_){
    // The injector unwraps the underscores (_) from around the parameter names when matching
    $controller = _$controller_;
  }));

  describe('$scope.grade', function() {
    it('sets the strength to "strong" if the password length is >8 chars', function() {
      var $scope = {};
      var controller = $controller('PasswordController', { $scope: $scope });
      $scope.password = 'longerthaneightchars';
      $scope.grade();
      expect($scope.strength).toEqual('strong');
    });
  });
});
*/
describe("Pokedex Page testing", function(){
  describe("Testing security functions",function(){
    it("should return false if password length is less or equal than 8",function(){
      expect(checkLength("12345678")).toBe(false);
    });
    it("should return true if password length is less or equal than 8",function(){
      expect(checkLength("123456789")).toBe(true);
    });
    it("should return false if password dont have uppercase letters",function(){
      expect(checkUpper("aaaaaaa")).toBe(false);
    });
    it("should return true if password dont have uppercase letters",function(){
      expect(checkUpper("aaaAaaa")).toBe(true);
    });
    it("should return false if password dont have lowercase letters",function(){
      expect(checkLower("AAAAAAAAA")).toBe(false);
    });
    it("should return true if password dont have lowercase letters",function(){
      expect(checkLower("AAAAAAaAAA")).toBe(true);
    });
    it("should return false if password dont have numbers",function(){
      expect(checkNumber("AAAAAAaAAA")).toBe(false);
    });
    it("should return true if password dont have numbers",function(){
      expect(checkNumber("AAAAA1AaAAA")).toBe(true);
    });
  });
});