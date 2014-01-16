/*! jQuery TableSearch v0.1 | (c) 2014 BertCorp. | jquery.org/license
// Inspired by: http://ejohn.org/blog/jquery-livesearch/ 
*/
(function($) {
	$.fn.tablesearch = function(listSelector) {
		this.each(function() {
			var list = $(this).parent().parent().find(listSelector);
			if (list.length) {
				$(this).keyup(function() {
					var value = $(this).val().toLowerCase().trim();
				  list.each(function(index) {
				  	if (!index) return;
						$(this).find("td").each(function () {
							var id = $(this).text().toLowerCase().trim();
							var data = $(this).attr('data-search')||'';
						  var not_found = (id.indexOf(value) == -1) && (data.indexOf(value) == -1);
						  $(this).closest('tr').toggle(!not_found);
						  return not_found;
						});
				  });
				});
			}
		});
		return this;
	}
	$(function() {
	  // Usage example:
		// $('.filter').tablesearch('.filterable tr');
	});
})(jQuery);
