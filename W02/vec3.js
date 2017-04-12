// Constructor
Vec3 = function(x, y, z)
{
	this.x = x;
	this.y = y;
	this.z = z;
}

// Add method
Vec3.prototype.add = fuction(v)
{
	this.x += v.x;
	this.y += v.y;
	this.z += v.z;
	return this;
}

// Sum method
Vec3.prototype.sum = function()
{
	return this.x + this.y + this.z;
}

// Returns a min. value of the elements
Vec3.prototype.min = function()
{
	var min = this.x;

	if (min > this.y)
	{
		min = this.y;
	}

	if (min > this.z)
	{
		min = this.z;
	}

	return min;
}

// Returns a max. value of the elements
Vec3.prototype.max = function()
{
	var max = this.x;

	if (max > this.y)
	{
		max = this.y;
	}

	if (max > this.z)
	{
		max = this.z;
	}

	return max;
}

// Returns a mid. value of the elements
// y < x < z, z < x < y
// x < y < z, z < y < x
// x < z < y, y < z < x
Vec3.prototype.mid = function()
{
	var mid;

	if (this.x < this.y)
	{
		if (this.y < this.z)
		{
			if (this.z < this.x)
			{
			}
			else
			{
				mid = this.y;
			}
		}
		else
		{
			if (this.z < this.x)
			{
				mid = this.x;
			}
			else
			{
				mid = this.z;
			}
		}
	}
	else
	{
		if (this.y < this.z)
		{
			if (this.z < this.x)
			{
				mid = this.z;
			}
			else
			{
				mid = this.x;
			}
		}
		else
		{
			if (this.z < this.x)
			{
				mid = this.y;
			}
			else
			{
			}
		}
	}

	return mid;
}
