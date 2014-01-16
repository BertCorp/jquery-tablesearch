jquery-tablesearch
==================

A jQuery plugin that allows you to search/filter table rows based on selectors.


== Usage

```
<div class="row">
	<div class="col-md-12">
		<div>
			<input type="text" class="filter form-control" placeholder="Search">
		</div>
		<table id="incomplete-forms" class="filterable table table-striped">
			<thead>
				<tr>
					<th>Name</th>
					<th>Last Modified</th>
					<th></th>
				</tr>
			</thead>
			<tbody>
			...
			</tbody>
		</table>
	</div>
</div>
```

```
  $(function() {
		$('.filter').tablesearch('.filterable tr');
	});
```
